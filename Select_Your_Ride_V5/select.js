console.log("select.js loaded");

const vehicles = window.VEHICLES || [];
let compareList = [];
let currentDetail = null;

document.addEventListener("DOMContentLoaded", () => {
  const advBtn = document.getElementById("advancedBtn");
  const advBox = document.getElementById("advancedBox");

  if (advBtn && advBox) {
    advBtn.onclick = () => advBox.classList.toggle("hidden");
  }
});

/* ======================
   HELPERS
====================== */
function legHeightCalc(height, leg) {
  return leg && leg > 0 ? leg : Math.round(height * 0.46);
}

/* ======================
   SCORE (OUT OF 10)
====================== */
function calculateScore(vehicle, user) {
  let score = 0;
  let reasons = [];

  // Seat fit (0–4)
  const leg = legHeightCalc(user.height, user.legHeight);
  const seat = vehicle.ergonomics.seatHeight / 10;
  const diff = Math.abs(seat - leg);

  let seatScore =
    diff <= 5 ? 4 :
    diff <= 15 ? 3 :
    diff <= 30 ? 2 : 1;

  score += seatScore;
  reasons.push(`Seat fit: ${seatScore}/4`);

  // Usage (0–3)
  const usagePref =
    user.usage < 50 ? vehicle.usage.city : vehicle.usage.highway;

  let usageScore =
    usagePref >= 80 ? 3 :
    usagePref >= 60 ? 2 : 1;

  score += usageScore;
  reasons.push(`Usage match: ${usageScore}/3`);

  // Frequency (0–2)
  let freqScore =
    user.frequency < 40 ? 2 :
    user.frequency < 70 ? 1 : 0;

  score += freqScore;
  reasons.push(`Frequency fit: ${freqScore}/2`);

  // Weight safety (0–1)
  let weightScore = 1;
  if (
    (user.weight < 50 && vehicle.physical.kerbWeight > 180) ||
    (user.weight > 90 && vehicle.physical.kerbWeight < 120)
  ) {
    weightScore = 0;
    reasons.push("Weight mismatch may affect stability");
  } else {
    reasons.push("Weight compatibility good");
  }

  score += weightScore;

  return { total: score, reasons };
}

/* ======================
   RECOMMEND
====================== */
function recommend() {
  const height = +document.getElementById("height").value;
  const weight = +document.getElementById("weight").value;
  const type = document.getElementById("type").value;
  const usage = +document.getElementById("usage").value;
  const frequency = +document.getElementById("frequency").value;
  const legHeightInput = document.getElementById("legHeight");

  const legHeight = legHeightInput && legHeightInput.value
    ? +legHeightInput.value
    : null;

  if (!height || height < 130 || height > 210) {
    alert("Enter valid height (cm)");
    return;
  }
  if (!weight || weight < 30 || weight > 200) {
    alert("Enter valid weight (kg)");
    return;
  }

  const user = { height, weight, usage, frequency, legHeight };

  const results = document.getElementById("results");
  results.innerHTML = "";

  const scored = vehicles
    .filter(v => v.type === type)
    .map(v => ({ vehicle: v, score: calculateScore(v, user) }))
    .sort((a, b) => b.score.total - a.score.total);

  if (scored.length === 0) {
    results.innerHTML = "<p>No vehicles found.</p>";
    return;
  }

  scored.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card" + (index === 0 ? " winner" : "");

    card.innerHTML = `
      ${index === 0 ? "<div class='winner-badge'>Best Match</div>" : ""}
      <h3>${item.vehicle.brand} ${item.vehicle.model}</h3>
      <b>${item.score.total}/10</b>
      <button onclick='showDetails(${JSON.stringify(item.vehicle)}, ${JSON.stringify(item.score)})'>
        Details
      </button>
    `;

    results.appendChild(card);
  });
}

/* ======================
   DETAILS
====================== */
function showDetails(vehicle, score) {
  currentDetail = { vehicle, score };

  document.getElementById("detailTitle").innerText =
    vehicle.brand + " " + vehicle.model;

  document.getElementById("detailScore").innerText =
    score.total;

  const ul = document.getElementById("detailReasons");
  ul.innerHTML = "";
  score.reasons.forEach(r => {
    const li = document.createElement("li");
    li.innerText = r;
    ul.appendChild(li);
  });

  document.getElementById("detailModal").classList.remove("hidden");
}

function closeDetails() {
  document.getElementById("detailModal").classList.add("hidden");
}

/* ======================
   COMPARE
====================== */
function addToCompare() {
  if (!currentDetail) {
    alert("Open details first");
    return;
  }

  if (compareList.length >= 2) {
    alert("You can compare only 2 vehicles");
    return;
  }

  compareList.push(currentDetail);

  if (compareList.length === 2) {
    showCompare();
  }

  closeDetails();
}

function showCompare() {
  const grid = document.getElementById("compareGrid");
  grid.innerHTML = "";

  const winner =
    compareList[0].score.total >= compareList[1].score.total
      ? compareList[0]
      : compareList[1];

  compareList.forEach(item => {
    const card = document.createElement("div");
    card.className = "card" + (item === winner ? " winner" : "");

    card.innerHTML = `
      <h4>${item.vehicle.brand} ${item.vehicle.model}</h4>
      <b>${item.score.total}/10</b>
      <p>${item.score.reasons.join("<br>")}</p>
    `;

    grid.appendChild(card);
  });

  document.getElementById("compareModal").classList.remove("hidden");
}

function closeCompare() {
  compareList = [];

  const compareModal = document.getElementById("compareModal");
  const detailModal = document.getElementById("detailModal");

  if (compareModal) compareModal.classList.add("hidden");
  if (detailModal) detailModal.classList.add("hidden");
}


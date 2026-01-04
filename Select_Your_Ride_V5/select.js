console.log("select.js loaded");

/* ===== GLOBAL STATE ===== */
const vehicles = window.VEHICLES || [];
let compareList = [];
let currentDetail = null;

/* ===== INIT ===== */
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("detailModal").classList.add("hidden");
  document.getElementById("compareModal").classList.add("hidden");

  document.getElementById("advancedBtn").onclick = () => {
    document.getElementById("advancedBox").classList.toggle("hidden");
  };
});

/* ===== HELPERS ===== */
function calcLegHeight(userHeight, legInput) {
  return legInput && legInput > 0
    ? legInput
    : Math.round(userHeight * 0.46);
}

/* ===== SCORE (OUT OF 10) ===== */
function calculateScore(vehicle, user) {
  let total = 0;
  let reasons = [];

  // Seat fit (0–4)
  const leg = calcLegHeight(user.height, user.legHeight);
  const seat = vehicle.ergonomics.seatHeight / 10;
  const diff = Math.abs(seat - leg);

  const seatScore =
    diff <= 5 ? 4 :
    diff <= 15 ? 3 :
    diff <= 30 ? 2 : 1;

  total += seatScore;
  reasons.push(`Seat fit: ${seatScore}/4`);

  // Usage (0–3)
  const usagePref =
    user.usage < 50 ? vehicle.usage.city : vehicle.usage.highway;

  const usageScore =
    usagePref >= 80 ? 3 :
    usagePref >= 60 ? 2 : 1;

  total += usageScore;
  reasons.push(`Usage match: ${usageScore}/3`);

  // Frequency (0–2)
  const freqScore =
    user.frequency < 40 ? 2 :
    user.frequency < 70 ? 1 : 0;

  total += freqScore;
  reasons.push(`Frequency fit: ${freqScore}/2`);

  // Weight (0–1)
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

  total += weightScore;

  return { total, reasons };
}

/* ===== RECOMMEND ===== */
function recommend() {
  const heightVal = +document.getElementById("height").value;
  const weightVal = +document.getElementById("weight").value;
  const typeVal = document.getElementById("type").value;
  const usageVal = +document.getElementById("usage").value;
  const freqVal = +document.getElementById("frequency").value;
  const legVal = +document.getElementById("legHeight").value || null;

  if (!heightVal || !weightVal) {
    alert("Enter height and weight");
    return;
  }

  const user = {
    height: heightVal,
    weight: weightVal,
    usage: usageVal,
    frequency: freqVal,
    legHeight: legVal
  };

  const results = document.getElementById("results");
  results.innerHTML = "";

  const list = vehicles
    .filter(v => v.type === typeVal)
    .map(v => ({ vehicle: v, score: calculateScore(v, user) }))
    .sort((a, b) => b.score.total - a.score.total);

  list.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "card" + (i === 0 ? " winner" : "");

    card.innerHTML = `
      ${i === 0 ? "<div class='winner-badge'>Best Match</div>" : ""}
      <h3>${item.vehicle.brand} ${item.vehicle.model}</h3>
      <b>${item.score.total}/10</b>
      <button onclick='showDetails(${JSON.stringify(item.vehicle)}, ${JSON.stringify(item.score)})'>
        Details
      </button>
    `;

    results.appendChild(card);
  });
}

/* ===== DETAILS ===== */
function showDetails(vehicle, score) {
  currentDetail = { vehicle, score };

  document.getElementById("detailTitle").innerText =
    `${vehicle.brand} ${vehicle.model}`;

  document.getElementById("detailScore").innerText = score.total;

  const ul = document.getElementById("detailReasons");
  ul.innerHTML = score.reasons.map(r => `<li>${r}</li>`).join("");

  document.getElementById("detailModal").classList.remove("hidden");
}

function closeDetails() {
  document.getElementById("detailModal").classList.add("hidden");
}

/* ===== COMPARE ===== */
function addToCompare() {
  if (!currentDetail) return;

  if (compareList.length >= 2) {
    alert("Only 2 vehicles can be compared");
    return;
  }

  compareList.push(currentDetail);

  if (compareList.length === 2) showCompare();
  closeDetails();
}

function showCompare() {
  const grid = document.getElementById("compareGrid");
  grid.innerHTML = "";

  compareList.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

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
  document.getElementById("compareModal").classList.add("hidden");
}

/* ===== EXPOSE TO HTML ===== */
window.recommend = recommend;
window.showDetails = showDetails;
window.addToCompare = addToCompare;
window.closeDetails = closeDetails;
window.closeCompare = closeCompare;

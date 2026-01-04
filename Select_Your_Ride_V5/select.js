console.log("select.js loaded");

const vehicles = window.VEHICLES || [];
let compareList = [];
let currentDetail = null;

/* ======================
   ADVANCED TOGGLE
====================== */
document.addEventListener("DOMContentLoaded", () => {
  const advBtn = document.getElementById("advancedBtn");
  const advBox = document.getElementById("advancedBox");

  if (advBtn && advBox) {
    advBtn.addEventListener("click", () => {
      advBox.classList.toggle("hidden");
    });
  }
});

/* ======================
   HELPERS
====================== */
function getLegHeight(height, input) {
  return input && input > 0 ? input : Math.round(height * 0.46);
}

/* ======================
   SCORE LOGIC ( /10 )
====================== */
function calculateScore(vehicle, user) {
  let total = 0;
  let reasons = [];

  /* Seat vs Leg (0–4) */
  const leg = getLegHeight(user.height, user.legHeight);
  const seat = vehicle.ergonomics.seatHeight / 10;
  const diff = Math.abs(seat - leg);

  let seatPts = diff <= 5 ? 4 : diff <= 15 ? 3 : diff <= 30 ? 2 : diff <= 50 ? 1 : 0;
  total += seatPts;
  reasons.push(`Seat fit: ${seatPts}/4`);

  /* Usage (0–3) */
  const usagePref = user.usage < 50 ? vehicle.usage.city : vehicle.usage.highway;
  let usagePts = usagePref >= 80 ? 3 : usagePref >= 60 ? 2 : usagePref >= 40 ? 1 : 0;
  total += usagePts;
  reasons.push(`Usage match: ${usagePts}/3`);

  /* Frequency (0–2) */
  let freqPts = user.frequency < 40 ? 2 : user.frequency < 70 ? 1 : 0;
  total += freqPts;
  reasons.push(`Frequency fit: ${freqPts}/2`);

  /* Weight safety (0–1) */
  let weightPts = 1;
  if (
    (user.weight < 50 && vehicle.physical.kerbWeight > 180) ||
    (user.weight > 90 && vehicle.physical.kerbWeight < 120)
  ) {
    weightPts = 0;
    reasons.push("Weight mismatch may affect stability");
  } else {
    reasons.push("Weight compatibility good");
  }

  total += weightPts;

  return { total, reasons };
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
  const legHeight = legHeightInput && legHeightInput.value ? +legHeightInput.value : null;

  if (!height || height < 130 || height > 210) {
    alert("Enter valid height");
    return;
  }

  if (!weight || weight < 30 || weight > 200) {
    alert("Enter valid weight");
    return;
  }

  const user = { height, weight, usage, frequency, legHeight };
  const results = document.getElementById("results");
  results.innerHTML = "";

  const list = vehicles
    .filter(v => v.type === type)
    .map(v => ({ vehicle: v, score: calculateScore(v, user) }))
    .sort((a, b) => b.score.total - a.score.total);

  if (!list.length) {
    results.innerHTML = "<p>No vehicles found.</p>";
    return;
  }

  list.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "card";
    if (i === 0) card.classList.add("winner");

    const btn = document.createElement("button");
    btn.textContent = "Details";
    btn.className = "secondary";
    btn.onclick = () => showDetails(item.vehicle, item.score);

    card.innerHTML = `
      ${i === 0 ? `<div class="winner-badge">Best Match</div>` : ""}
      <h3>${item.vehicle.brand} ${item.vehicle.model}</h3>
      <b>Score: ${item.score.total}/10</b>
    `;

    card.appendChild(btn);
    results.appendChild(card);
  });
}

/* ======================
   DETAILS
====================== */
function showDetails(vehicle, score) {
  currentDetail = { vehicle, score };

  document.getElementById("detailTitle").innerText =
    `${vehicle.brand} ${vehicle.model}`;
  document.getElementById("detailScore").innerText = score.total;

  const ul = document.getElementById("detailReasons");
  ul.innerHTML = "";
  score.reasons.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
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
  if (!currentDetail) return;

  if (compareList.length >= 2) {
    alert("Only 2 vehicles can be compared");
    return;
  }

  compareList.push(currentDetail);
  closeDetails();

  if (compareList.length === 2) showCompare();
}

function showCompare() {
  const grid = document.getElementById("compareGrid");
  grid.innerHTML = "";

  const [a, b] = compareList;
  const winner = a.score.total >= b.score.total ? a : b;

  [a, b].forEach(item => {
    const card = document.createElement("div");
    card.className = "compare-card";
    if (item === winner) card.classList.add("winner");

    card.innerHTML = `
      <h3>${item.vehicle.brand} ${item.vehicle.model}</h3>
      <b>${item.score.total}/10</b>

      ${buildMetric("Seat Fit", item.score.reasons[0], item.score.total, 4)}
      ${buildMetric("Usage Match", item.score.reasons[1], item.score.total, 3)}
      ${buildMetric("Frequency Fit", item.score.reasons[2], item.score.total, 2)}
      ${buildMetric("Weight Safety", item.score.reasons[3], item.score.total, 1)}
    `;

    grid.appendChild(card);
  });

  document.getElementById("compareModal").classList.remove("hidden");
}

function buildMetric(label, text, value, max) {
  const percent = Math.min((value / 10) * 100, 100);

  return `
    <div class="metric">
      <div class="metric-label">${label}</div>
      <div class="bar">
        <span style="width:${percent}%"></span>
      </div>
      <small>${text}</small>
    </div>
  `;
}

function closeCompare() {
  compareList = [];
  document.getElementById("compareModal").classList.add("hidden");
}

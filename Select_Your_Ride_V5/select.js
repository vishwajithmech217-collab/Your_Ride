console.log("select.js loaded");

const vehicles = VEHICLES;
let userData = {};

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
   SCORE LOGIC
====================== */
function calculateScore(vehicle, user) {
  let total = 0;
  let reasons = [];

  // ---- Seat Height vs Leg Height (40) ----
  const legHeight =
    user.legHeight && user.legHeight > 0
      ? user.legHeight
      : Math.round(user.height * 0.46);

  const diff = Math.abs(vehicle.ergonomics.seatHeight - legHeight);

  let seatScore = 0;
  if (diff <= 10) {
    seatScore = 40;
    reasons.push("Excellent seat height match");
  } else if (diff <= 30) {
    seatScore = 30;
    reasons.push("Comfortable seat height");
  } else if (diff <= 60) {
    seatScore = 20;
    reasons.push("Seat height may feel tall");
  } else {
    seatScore = 10;
    reasons.push("Seat height not ideal");
  }

  total += seatScore;

// ---- Weight vs Kerb Weight (10) ----
let weightPenalty = 0;

if (user.weight && vehicle.physical?.kerbWeight) {
  const ratio = vehicle.physical.kerbWeight / user.weight;

  if (ratio > 3) {
    weightPenalty = -10;
    reasons.push("⚠ Heavy bike for your body weight");
  } else if (ratio > 2.5) {
    weightPenalty = -5;
    reasons.push("⚠ Slightly heavy for comfortable handling");
  }
}

total += weightPenalty;

  // ---- Usage Match (30) ----
  const usageScore =
    user.usage < 50
      ? vehicle.usage.city
      : vehicle.usage.highway;

  total += Math.round(usageScore * 0.3);

  if (user.usage < 50) {
    reasons.push("Good for city riding");
  } else {
    reasons.push("Comfortable on highways");
  }

  // ---- Frequency (20) ----
  total += Math.round(user.frequency * 0.2);

// ---- Skill Level Check (Warning only) ----
if (vehicle.skillLevel === "intermediate") {
  reasons.push("⚠ Better suited for experienced riders");
}

if (vehicle.skillLevel === "expert") {
  reasons.push("⚠ Not beginner friendly");
}

  return {
  total: Math.min(total, 100),
  seatScore,
  usageScore: Math.round(
    (user.usage < 50
      ? vehicle.usage.city
      : vehicle.usage.highway) * 0.3
  ),
  freqScore: Math.round(user.frequency * 0.2),
  weightPenalty,
  reasons
};
}

/* ======================
   RECOMMEND
====================== */
function recommend() {
  const type = document.getElementById("type").value;
  const results = document.getElementById("results");
  results.innerHTML = "";

  userData = {
    height: +document.getElementById("height").value,
    weight: +document.getElementById("weight").value || null,
    usage: +document.getElementById("usage").value,
    frequency: +document.getElementById("frequency").value,
    legHeight: +document.getElementById("legHeight").value || null
  };

  let list = vehicles
    .filter(v => v.type === type)
    .map(v => ({
      vehicle: v,
      score: calculateScore(v, userData)
    }));

  if (list.length === 0) {
    results.innerHTML = "<p>No vehicles found.</p>";
    return;
  }

  // 🏆 Find winner
  const winnerScore = Math.max(...list.map(x => x.score.total));

  list.forEach(({ vehicle, score }) => {
    const isWinner = score.total === winnerScore;

    const card = document.createElement("div");
    card.className = "card";
    if (isWinner) card.classList.add("winner");

    card.innerHTML = `
      <h3>${vehicle.brand} ${vehicle.model}</h3>
      <b>Score: ${score.total}/100</b>

      <p>✓ ${score.reasons[0]}</p>
      <p>✓ ${score.reasons[1]}</p>

      <button onclick='showDetails(${JSON.stringify(vehicle)}, ${JSON.stringify(score)})'>
        Details
      </button>

      <button onclick="knowRide('${vehicle.brand}', '${vehicle.model}')">
        Know this Ride →
      </button>
    `;

    results.appendChild(card);
  });
}

/* ======================
   DETAILS
====================== */

let selectedForCompare = null;

function showDetails(vehicle, score) {
  selectedForCompare = { vehicle, score };

  document.getElementById("dName").innerText =
    `${vehicle.brand} ${vehicle.model}`;

  document.getElementById("dScore").innerText =
    `Overall Score: ${score.total}/100`;

  document.getElementById("barSeat").style.width =
    score.seatScore * 2.5 + "%";

  document.getElementById("barUsage").style.width =
    Math.round(score.total * 0.3) + "%";

  document.getElementById("barFreq").style.width =
    Math.round(score.total * 0.2) + "%";

  const ul = document.getElementById("detailReasons");
  ul.innerHTML = "";
  score.reasons.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    ul.appendChild(li);
  });

  document.getElementById("detailModal")
    .classList.remove("hidden");
}

function closeDetail() {
  document.getElementById("detailModal")
    .classList.add("hidden");
}

/* ======================
   KNOW RIDE LINK
====================== */
function knowRide(brand, model) {
  const params = new URLSearchParams({ brand, model });
  window.location.href =
    "../Know_Your_Ride/know.html?" + params.toString();
}

let compareList = [];

function addToCompare() {
  if (!selectedForCompare) return;

  if (compareList.length >= 2) {
    alert("You can compare only 2 vehicles");
    return;
  }

  compareList.push(selectedForCompare);

  if (compareList.length === 2) {
    showCompare();
  }

  closeDetail();
}

function showCompare() {
  const grid = document.getElementById("compareGrid");
  grid.innerHTML = "";

  const [a, b] = compareList;
  const winner =
    a.score.total >= b.score.total ? a : b;

  [a, b].forEach(item => {
    const card = document.createElement("div");
    card.className = "compare-card";
    if (item === winner) card.classList.add("winner");

    card.innerHTML = `
      <h3>${item.vehicle.brand} ${item.vehicle.model}</h3>
      <b>Score: ${item.score.total}/100</b>
      <p>Seat Fit: ${item.score.seatScore}</p>
      <p>${item.score.reasons.join("<br>")}</p>
    `;

    grid.appendChild(card);
  });

  document.getElementById("compareModal")
    .classList.remove("hidden");
}

function closeCompare() {
  compareList = [];
  document.getElementById("compareModal")
    .classList.add("hidden");
}
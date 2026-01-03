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
  let weightPenalty = 0; // ✅ FIX 1

  // ---- Seat Height vs Leg Height (40) ----
  const legHeight = user.legHeight && user.legHeight > 0
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

  // ---- SAFETY CHECK: Weight vs Vehicle Mass ----
  if (user.weight < 50 && vehicle.physical.kerbWeight > 180) {
    reasons.push("Heavy vehicle may feel unstable for your body weight");
    weightPenalty -= 5;
  }

  if (user.weight > 90 && vehicle.physical.kerbWeight < 120) {
    reasons.push("Light vehicle may feel unstable at high speeds");
    weightPenalty -= 5;
  }

  total += weightPenalty; // ✅ apply ONCE

  // ---- Usage Match (30) ----
  const usageScore =
    user.usage < 50 ? vehicle.usage.city : vehicle.usage.highway;
  const usagePoints = Math.round(usageScore * 0.3);
  total += usagePoints;

  reasons.push(
    user.usage < 50 ? "Good for city riding" : "Comfortable on highways"
  );

  // ---- Frequency (20) ----
  const freqScore = Math.round(user.frequency * 0.2);
  total += freqScore;

  // ---- Skill Level Warning ----
  if (vehicle.skillLevel === "intermediate") {
    reasons.push("⚠ Better suited for experienced riders");
  }
  if (vehicle.skillLevel === "expert") {
    reasons.push("⚠ Not beginner friendly");
  }

  return {
    total: Math.max(0, Math.min(total, 100)),
    seatScore,
    usageScore: usagePoints,
    freqScore,
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
    weight: +document.getElementById("weight").value,
    usage: +document.getElementById("usage").value,
    frequency: +document.getElementById("frequency").value,
    legHeight: +document.getElementById("legHeight").value || null
  };

  if (!userData.height || userData.height < 130 || userData.height > 210) {
    alert("Height must be between 130 cm and 210 cm");
    return;
  }

  if (!userData.weight || userData.weight < 30 || userData.weight > 200) {
    alert("Weight must be between 30 kg and 200 kg");
    return;
  }

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
  (score.seatScore / 40) * 100 + "%";

document.getElementById("barUsage").style.width =
  score.usageScore + "%";

document.getElementById("barFreq").style.width =
  score.freqScore + "%";

document.getElementById("bSeat").innerText = score.seatScore;
document.getElementById("bUsage").innerText = score.usageScore;
document.getElementById("bFreq").innerText = score.freqScore;
document.getElementById("bWeight").innerText =
  score.weightPenalty < 0 ? score.weightPenalty : "0";

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

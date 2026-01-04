console.log("select.js loaded");

const vehicles = window.VEHICLES || [];

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
function getLegHeight(height, legHeightInput) {
  return legHeightInput && legHeightInput > 0
    ? legHeightInput
    : Math.round(height * 0.46);
}

/* ======================
   SCORE LOGIC ( /10 )
====================== */
function calculateScore(vehicle, user) {
  let score = 0;
  let reasons = [];

  /* 1️⃣ Seat / Leg fit (0–4) */
  const legHeight = getLegHeight(user.height, user.legHeight);
  const seatHeightCm = vehicle.ergonomics.seatHeight / 10; // FIX
  const diff = Math.abs(seatHeightCm - legHeight);

  let seatPoints = 0;
  if (diff <= 5) seatPoints = 4;
  else if (diff <= 15) seatPoints = 3;
  else if (diff <= 30) seatPoints = 2;
  else if (diff <= 50) seatPoints = 1;

  score += seatPoints;
  reasons.push(`Seat fit: ${seatPoints}/4`);

  /* 2️⃣ Usage match (0–3) */
  const usagePref =
    user.usage < 50 ? vehicle.usage.city : vehicle.usage.highway;

  let usagePoints = 0;
  if (usagePref >= 80) usagePoints = 3;
  else if (usagePref >= 60) usagePoints = 2;
  else if (usagePref >= 40) usagePoints = 1;

  score += usagePoints;
  reasons.push(`Usage match: ${usagePoints}/3`);

  /* 3️⃣ Frequency (0–2) */
  let freqPoints = 0;
  if (user.frequency < 40) freqPoints = 2;
  else if (user.frequency < 70) freqPoints = 1;

  score += freqPoints;
  reasons.push(`Frequency fit: ${freqPoints}/2`);

  /* 4️⃣ Weight safety (0–1) */
  let weightPoints = 1;
  if (
    (user.weight < 50 && vehicle.physical.kerbWeight > 180) ||
    (user.weight > 90 && vehicle.physical.kerbWeight < 120)
  ) {
    weightPoints = 0;
    reasons.push("Weight mismatch may affect stability");
  } else {
    reasons.push("Weight compatibility good");
  }

  score += weightPoints;

  return {
    total: score,
    reasons
  };
}

/* ======================
   RECOMMEND
====================== */
function recommend() {
  const height = +document.getElementById("height").value;
  const weight = +document.getElementById("weight").value;
  const type = document.getElementById("type").value;

  const usageInput = document.getElementById("usage");
  const frequencyInput = document.getElementById("frequency");
  const legHeightInput = document.getElementById("legHeight");

  const usage = usageInput ? +usageInput.value : 50;
  const frequency = frequencyInput ? +frequencyInput.value : 50;
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

  /* 🔹 SCORE + SORT 🔹 */
  const scoredVehicles = vehicles
    .filter(v => v.type === type)
    .map(v => ({
      vehicle: v,
      score: calculateScore(v, user)
    }))
    .sort((a, b) => b.score.total - a.score.total);

  if (scoredVehicles.length === 0) {
    results.innerHTML = "<p>No vehicles found.</p>";
    return;
  }

  const winnerScore = scoredVehicles[0].score.total;

  scoredVehicles.forEach(({ vehicle, score }, index) => {
    const isWinner = index === 0;

    const card = document.createElement("div");
    card.className = "card";
    if (isWinner) card.classList.add("winner");

    card.innerHTML = `
      ${isWinner ? `<div class="winner-badge">Best Match</div>` : ""}
      <h3>${vehicle.brand} ${vehicle.model}</h3>
      <b>Score: ${score.total}/10</b>
      <ul>
        ${score.reasons.map(r => `<li>${r}</li>`).join("")}
      </ul>
    `;

    results.appendChild(card);
  });
}
let currentDetail = null;

function showDetails(vehicle, score) {
  currentDetail = { vehicle, score };

  document.getElementById("detailTitle").innerText =
    vehicle.brand + " " + vehicle.model;

  document.getElementById("detailScore").innerText =
    score.total;

  const ul = document.getElementById("detailReasons");
  ul.innerHTML = "";

  score.reasons.forEach(reason => {
    const li = document.createElement("li");
    li.innerText = reason;
    ul.appendChild(li);
  });

  document.getElementById("detailModal").classList.remove("hidden");
}

function closeDetails() {
  document.getElementById("detailModal").classList.add("hidden");
}

console.log("select.js loaded");

/* ======================
   DATA
====================== */
const vehicles = VEHICLES;
let userData = {};

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
   SCORE LOGIC
====================== */
function calculateScore(vehicle, user) {
  let total = 0;
  let reasons = [];
  let weightPenalty = 0;

  /* ---- Seat Height vs Leg Height (40) ---- */
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

  /* ---- SAFETY: Weight vs Vehicle ---- */
  if (user.weight < 50 && vehicle.physical.kerbWeight > 180) {
    reasons.push("Heavy vehicle may feel unstable for your body weight");
    weightPenalty -= 5;
  }

  if (user.weight > 90 && vehicle.physical.kerbWeight < 120) {
    reasons.push("Light vehicle may feel unstable at high speeds");
    weightPenalty -= 5;
  }

  total += weightPenalty;

  /* ---- Usage Match (30) ---- */
  const usageRaw =
    user.usage < 50 ? vehicle.usage.city : vehicle.usage.highway;

  const usageScore = Math.round(usageRaw * 0.3);
  total += usageScore;

  reasons.push(
    user.usage < 50 ? "Good for city riding" : "Comfortable on highways"
  );

  /* ---- Frequency (20) ---- */
  const freqScore = Math.round(user.frequency * 0.2);
  total += freqScore;

  /* ---- Skill Level Warning ---- */
  if (vehicle.skillLevel === "intermediate") {
    reasons.push("⚠ Better suited for experienced riders");
  }
  if (vehicle.skillLevel === "expert") {
    reasons.push("⚠ Not beginner friendly");
  }

  return {
    total: Math.max(0, Math.min(total, 100)),
    seatScore,
    usageScore,
    freqScore,
    weightPenalty,
    reasons
  };
}

/* ======================
   RECOMMEND
====================== */
function recommend() {

  const type = document
    .getElementById("type")
    .value
    .toLowerCase();

  const results = document.getElementById("results");
  results.innerHTML = "";

  userData = {
    height: +document.getElementById("height").value,
    weight: +document.getElementById("weight").value,
    usage: +document.getElementById("usage").value,
    frequency: +document.getElementById("frequency").value,
    legHeight: +document.getElementById("legHeight").value || null
  };


  /* ---- VALIDATION ---- */
  if (!userData.height || userData.height < 130 || userData.height > 210) {
    alert("Please enter a valid height (cm)");
    return;
  }

  if (!userData.weight || userData.weight < 30 || userData.weight > 200) {
    alert("Please enter a valid weight (kg)");

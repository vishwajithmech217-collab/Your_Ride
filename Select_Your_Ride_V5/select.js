console.log("select.js loaded");

/* -----------------------
   VEHICLE DATA (TEMP)
----------------------- */
const VEHICLES = [
  {
    brand: "Yamaha",
    model: "MT-15",
    type: "bike",
    ergonomics: { seatHeight: 810 },
    physical: { kerbWeight: 141 },
    usage: { city: 70, highway: 80 },
    skillLevel: "intermediate"
  },
  {
    brand: "Royal Enfield",
    model: "Classic 350",
    type: "bike",
    ergonomics: { seatHeight: 805 },
    physical: { kerbWeight: 195 },
    usage: { city: 60, highway: 85 },
    skillLevel: "beginner"
  }
];

/* -----------------------
   ADVANCED TOGGLE
----------------------- */
document.getElementById("advancedBtn").onclick = () => {
  document.getElementById("advancedBox").classList.toggle("hidden");
};

/* -----------------------
   SCORE FUNCTION
----------------------- */
function calculateScore(vehicle, user) {
  let score = 0;
  let reasons = [];

  const leg = user.legHeight || Math.round(user.height * 0.46);
  const diff = Math.abs(vehicle.ergonomics.seatHeight - leg);

  if (diff <= 30) {
    score += 40;
    reasons.push("Seat height suits you");
  } else {
    score += 20;
    reasons.push("Seat height may feel tall");
  }

  if (user.weight < 50 && vehicle.physical.kerbWeight > 180) {
    reasons.push("Heavy bike for your weight");
    score -= 5;
  }

  const usageScore = user.usage < 50
    ? vehicle.usage.city
    : vehicle.usage.highway;

  score += Math.round(usageScore * 0.3);
  score += Math.round(user.frequency * 0.2);

  return {
    total: Math.max(0, Math.min(score, 100)),
    reasons
  };
}

/* -----------------------
   RECOMMEND
----------------------- */
function recommend() {
  console.log("Recommend clicked");

  const height = +document.getElementById("height").value;
  const weight = +document.getElementById("weight").value;
  const type = document.getElementById("type").value;
  const usage = +document.getElementById("usage").value;
  const frequency = +document.getElementById("frequency").value;

  const legInput = document.getElementById("legHeight");
  const legHeight = legInput && legInput.value ? +legInput.value : null;

  if (height < 130 || height > 210) {
    alert("Enter valid height (130–210 cm)");
    return;
  }

  if (weight < 30 || weight > 200) {
    alert("Enter valid weight (30–200 kg)");
    return;
  }

  const results = document.getElementById("results");
  results.innerHTML = "";

  const filtered = VEHICLES
    .filter(v => v.type === type)
    .map(v => ({
      vehicle: v,
      score: calculateScore(v, { height, weight, usage, frequency, legHeight })
    }));

  if (filtered.length === 0) {
    results.innerHTML = "<p>No vehicles found.</p>";
    return;
  }

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <b>${item.vehicle.brand} ${item.vehicle.model}</b><br>
      Score: ${item.score.total}/100<br>
      ${item.score.reasons.join("<br>")}
    `;
    results.appendChild(div);
  });
}

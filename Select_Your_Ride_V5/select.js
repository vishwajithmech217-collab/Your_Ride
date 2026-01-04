console.log("select.js loaded");
alert("NEW LOGIC ACTIVE");
const vehicles = window.VEHICLES;

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
  const diff = Math.abs(vehicle.ergonomics.seatHeight - legHeight);

  let seatPoints = 0;
  if (diff <= 5) seatPoints = 4;
  else if (diff <= 15) seatPoints = 3;
  else if (diff <= 30) seatPoints = 2;
  else if (diff <= 50) seatPoints = 1;

  score += seatPoints;
  reasons.push(`Seat fit score: ${seatPoints}/4`);

  /* 2️⃣ Usage match (0–3) */
  const usagePref = user.usage < 50
    ? vehicle.usage.city
    : vehicle.usage.highway;

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
  reasons.push(`Usage frequency: ${freqPoints}/2`);

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
  const usage = +document.getElementById("usage").value;
  const frequency = +document.getElementById("frequency").value;
  const legHeight = +document.getElementById("legHeight").value || null;

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

  vehicles
    .filter(v => v.type === type)
    .forEach(v => {
      const result = calculateScore(v, user);

      let label = "Not Ideal";
      if (result.total >= 8) label = "Recommended";
      else if (result.total >= 5) label = "Consider";

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${v.brand} ${v.model}</h3>
        <b>Score: ${result.total}/10</b>
        <p>${label}</p>
      `;

      results.appendChild(card);
    });
}

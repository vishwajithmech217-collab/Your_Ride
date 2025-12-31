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

  return {
    total: Math.min(total, 100),
    seatScore,
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
function showDetails(vehicle, score) {
  document.getElementById("dName").innerText =
    `${vehicle.brand} ${vehicle.model}`;

  document.getElementById("dScore").innerHTML = `
    Overall Score: <b>${score.total}/100</b>
    <br><br>
    <b>Why this fits you:</b>
    <ul>
      ${score.reasons.map(r => `<li>${r}</li>`).join("")}
    </ul>
  `;

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
console.log("select.js loaded");

const vehicles = VEHICLES;
let userData = {};

/* ======================
   SCORE LOGIC
====================== */
function calculateScore(vehicle, user) {
  const legHeight = Math.round(user.height * 0.46);
  const seatDiff = Math.abs(vehicle.ergonomics.seatHeight - legHeight);

  let seatScore = 0;
  let seatFit = "";

  if (seatDiff <= 20) {
    seatScore = 40;
    seatFit = "Excellent seat height match";
  } else if (seatDiff <= 40) {
    seatScore = 30;
    seatFit = "Comfortable seat height";
  } else if (seatDiff <= 60) {
    seatScore = 20;
    seatFit = "Manageable but tall";
  } else {
    seatScore = 10;
    seatFit = "Seat height may feel too tall";
  }

  const usageScore =
    user.usage < 50
      ? vehicle.usage.city
      : vehicle.usage.highway;

  const frequencyScore = Math.round(user.frequency * 0.1);

  const total = Math.min(
    seatScore + Math.round(usageScore * 0.3) + frequencyScore,
    100
  );

  return {
    total,
    seatFit,
    usageMatch:
      user.usage < 50
        ? "Good for city usage"
        : "Comfortable on highways"
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
  const winnerScore = Math.max(...list.map(v => v.score.total));

  list.forEach(({ vehicle, score }) => {
    const isWinner = score.total === winnerScore;

    const card = document.createElement("div");
    card.className = "card";
    if (isWinner) card.classList.add("winner");

    card.innerHTML = `
      ${isWinner ? `<div class="winner-badge">BEST MATCH</div>` : ""}

      <h3>${vehicle.brand} ${vehicle.model}</h3>
      <p><b>Score:</b> ${score.total}/100</p>

      <div class="hint">✔ ${score.seatFit}</div>
      <div class="hint">✔ ${score.usageMatch}</div>

      <button onclick='showDetails(${JSON.stringify(vehicle)}, ${JSON.stringify(score)})'>
        Details
      </button>

      <button onclick='knowRide("${vehicle.brand}", "${vehicle.model}")'>
        Know this Ride →
      </button>
    `;

    results.appendChild(card);
  });
}

/* ======================
   DETAILS
====================== */
function showDetails(v, score) {
  document.getElementById("dName").innerText =
    `${v.brand} ${v.model}`;

  document.getElementById("dScore").innerHTML = `
    Overall Score: <b>${score.total}/100</b><br><br>
    <b>Why this fits you:</b>
    <ul>
      <li>${score.seatFit}</li>
      <li>${score.usageMatch}</li>
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
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
  let score = 0;

  // Use leg height if provided, else estimate
  const legHeight =
    user.legHeight && user.legHeight > 0
      ? user.legHeight
      : Math.round(user.height * 0.46);

  const seatHeight = vehicle.ergonomics.seatHeight;
  const diff = Math.abs(seatHeight - legHeight);

  // Seat comfort score (0–40)
  let seatScore = 0;
  if (diff <= 10) seatScore = 40;       // flat foot
  else if (diff <= 30) seatScore = 30;  // comfortable
  else if (diff <= 60) seatScore = 20;  // tiptoe
  else seatScore = 10;                  // risky

  score += seatScore;

  // Usage
  const usageScore =
    user.usage < 50
      ? vehicle.usage.city
      : vehicle.usage.highway;
  score += usageScore * 0.3;

  // Frequency
  score += user.frequency * 0.2;

  return Math.round(Math.min(score, 100));
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
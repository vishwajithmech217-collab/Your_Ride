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
  if (seatDiff <= 20) seatScore = 40;
  else if (seatDiff <= 40) seatScore = 30;
  else if (seatDiff <= 60) seatScore = 20;
  else seatScore = 10;

  const usageScore =
    user.usage < 50
      ? vehicle.usage.city
      : vehicle.usage.highway;

  const frequencyScore = Math.round(user.frequency * 0.1);

  return Math.min(
    seatScore + Math.round(usageScore * 0.3) + frequencyScore,
    100
  );
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
    frequency: +document.getElementById("frequency").value
  };

  const list = vehicles.filter(v => v.type === type);

  if (list.length === 0) {
    results.innerHTML = "<p>No vehicles found.</p>";
    return;
  }

  list.forEach(v => {
    const score = calculateScore(v, userData);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${v.brand} ${v.model}</h3>
      <p><b>Score:</b> ${score}/100</p>

      <button onclick='showDetails(${JSON.stringify(v)}, ${score})'>
        Details
      </button>

      <button onclick='knowRide("${v.brand}", "${v.model}")'>
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
  document.getElementById("dScore").innerText =
    `Overall Score: ${score}/100`;

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
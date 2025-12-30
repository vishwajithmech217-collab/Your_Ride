console.log("select.js loaded");

const preBrand = localStorage.getItem("selectedBrand");

/* ===============================
   GLOBAL STATE
================================ */
let compareList = [];
let userData = {};

/* ===============================
   VEHICLE DATA (from vehicles.data.js)
================================ */
const vehicles = VEHICLES;

/* ===============================
   SCORE CALCULATION
================================ */
function calculateScore(vehicle, user) {
  let score = 0;

  // Seat height vs user height
  const heightDiff = Math.abs(user.height - vehicle.seatHeight);
  score += Math.max(0, 40 - heightDiff / 5);

  // Usage bias
  const usageScore =
    user.usage < 50 ? vehicle.cityBias : vehicle.highwayBias;
  score += usageScore * 0.4;

  // Frequency
  score += user.frequency * 0.2;
// Leg height estimation
const legHeight =
  user.legHeight ||
  Math.round(user.height * 0.46);

// Seat height comfort score (0–40)
const diff = vehicle.seatHeight - legHeight;

let seatScore = 0;
if (diff <= -20) seatScore = 40;        // very comfortable
else if (diff <= 0) seatScore = 35;
else if (diff <= 30) seatScore = 25;    // manageable
else if (diff <= 60) seatScore = 15;    // tiptoe zone
else seatScore = 5;                     // unsafe feel

score += seatScore;
  return Math.round(Math.min(score, 100));
}

/* ===============================
   INIT
================================ */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("detailModal").classList.add("hidden");
  document.getElementById("compareModal").classList.add("hidden");

  document
    .getElementById("advancedBtn")
    .addEventListener("click", () => {
      document.getElementById("advancedBox").classList.toggle("hidden");
    });

  document
    .getElementById("recommendBtn")
    .addEventListener("click", recommend);
});

function comfortZone(vehicle, user) {
  const legHeight =
    user.legHeight ||
    Math.round(user.height * 0.46);

  const diff = vehicle.seatHeight - legHeight;

  if (diff <= 0) return "Excellent";
  if (diff <= 40) return "OK";
  return "Risky";
}


/* ===============================
   RECOMMENDATION
================================ */
function recommend() {
  const type = document.getElementById("type").value;
  const results = document.getElementById("results");
  results.innerHTML = "";
  compareList = [];

  userData = {
    height: Number(document.getElementById("height").value),
    usage: Number(document.getElementById("usage").value),
    frequency: Number(document.getElementById("frequency").value)
  };

let list = vehicles.filter(v => v.type === type);

if (preBrand) {
  list = list.filter(v =>
    v.brand?.toLowerCase().includes(preBrand.replace("_", ""))
  );
}

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
      <b>${v.brand} ${v.model}</b><br>
      Score: ${score}/100<br><br>

      <button onclick='addToCompare(${JSON.stringify(v)}, ${score})'>
        Compare
      </button>

      <button onclick='showDetails(${JSON.stringify(v)}, ${score})'>
        Details
      </button>
    `;
    results.appendChild(card);
  });
}

/* ===============================
   DETAILS MODAL
================================ */
function showDetails(v, score) {
  document.getElementById("dName").innerText =
    `${v.brand} ${v.model}`;
  document.getElementById("dScore").innerText =
    `Overall Score: ${score}/100`;

  document.getElementById("barComfort").style.width = score + "%";
  document.getElementById("barControl").style.width = v.cityBias + "%";
  document.getElementById("barPosture").style.width =
    v.posture === "sport" ? "70%" :
    v.posture === "upright" ? "85%" : "75%";
  document.getElementById("barUsage").style.width = v.highwayBias + "%";

  document.getElementById("whyFit").innerHTML = `
    <li>Seat height aligns with your height</li>
    <li>Usage pattern matches your riding style</li>
  `;

  document.getElementById("whyNot").innerHTML = `
    <li>Posture preference may vary</li>
  `;

  document.getElementById("detailModal").classList.remove("hidden");
}

function closeDetail(e) {
  if (e) e.stopPropagation();
  document.getElementById("detailModal").classList.add("hidden");

const zone = comfortZone(v, user);

const zoneColor =
  zone === "Excellent" ? "#22c55e" :
  zone === "OK" ? "#facc15" :
  "#ef4444";

document.getElementById("whyFit").innerHTML += `
  <li>
    <b style="color:${zoneColor}">
      Comfort Zone: ${zone}
    </b>
  </li>
`;

}

/* ===============================
   COMPARE LOGIC
================================ */
function addToCompare(vehicle, score) {
  if (compareList.length >= 2) {
    alert("Only 2 vehicles can be compared");
    return;
  }

  compareList.push({ ...vehicle, score });

  if (compareList.length === 2) {
    renderCompare();
  }
}

function renderCompare() {
  const grid = document.getElementById("compareGrid");
  grid.innerHTML = "";

  const [a, b] = compareList;
  const winner =
    a.score > b.score ? a :
    b.score > a.score ? b : null;

  compareList.forEach(v => {
    const other = v === a ? b : a;

    const div = document.createElement("div");
    div.className = "compare-card";

    if (winner && v === winner) {
      div.classList.add("winner");
    }

    div.innerHTML = `
      ${winner && v === winner
        ? `<div class="winner-badge">BEST MATCH</div>`
        : ""}

      <h3>${v.brand} ${v.model}</h3>
      <p><b>Score:</b> ${v.score}/100</p>

      ${deltaBar("City Bias", v.cityBias, other.cityBias)}
      ${deltaBar("Highway Bias", v.highwayBias, other.highwayBias)}
    `;

    grid.appendChild(div);
  });

  const explain = document.createElement("div");
  explain.className = "card";
  explain.innerHTML = explainWinner(a, b);
  grid.appendChild(explain);

  document.getElementById("compareModal").classList.remove("hidden");
}

function closeCompare() {
  compareList = [];
  document.getElementById("compareModal").classList.add("hidden");
}

/* ===============================
   HELPERS
================================ */
function deltaBar(label, a, b) {
  const diff = a - b;
  const sign = diff >= 0 ? "+" : "";
  const color = diff >= 0 ? "#22c55e" : "#ef4444";

  return `
    <div>
      ${label}: <b style="color:${color}">${sign}${diff}</b>
      <div class="bar">
        <span style="width:${Math.min(Math.abs(diff), 100)}%; background:${color}"></span>
      </div>
    </div>
  `;
}

function explainWinner(a, b) {
  const winner = a.score >= b.score ? a : b;
  const loser = winner === a ? b : a;

  const reasons = [];

  if (winner.cityBias > loser.cityBias)
    reasons.push("better city usability");

  if (winner.highwayBias > loser.highwayBias)
    reasons.push("better highway comfort");

  if (
    Math.abs(winner.seatHeight - userData.height) <
    Math.abs(loser.seatHeight - userData.height)
  )
    reasons.push("closer seat height match");

  return `
    🏆 <b>${winner.brand} ${winner.model} wins</b><br>
    <small>Because it has ${reasons.join(" and ")}</small>
  `;
}
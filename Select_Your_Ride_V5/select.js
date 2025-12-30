function recommend() {
  alert("Recommend is working!");

console.log("select.js loaded");

const vehicles = VEHICLES;
let compareList = [];
let userData = {};

const selectedBrand = localStorage.getItem("selectedBrand");

document.getElementById("recommendBtn").onclick = recommend;

function calculateScore(vehicle, user) {
  // Seat height vs leg height (40%)
  const legHeight = user.legHeight || Math.round(user.height * 0.46);
  const seatDiff = Math.abs(vehicle.seatHeight - legHeight);

  let seatScore = 0;
  if (seatDiff <= 20) seatScore = 40;
  else if (seatDiff <= 40) seatScore = 30;
  else if (seatDiff <= 60) seatScore = 20;
  else seatScore = 10;

  // Usage (30%)
  const usageScore =
    user.usage < 50 ? vehicle.cityBias : vehicle.highwayBias;
  const usageFinal = Math.round(usageScore * 0.3);

  // Frequency (10%)
  const frequencyScore = Math.round(user.frequency * 0.1);

  // Posture (20%)
  const postureScore = Math.round(
    (vehicle.ergonomics?.postureScore || 70) * 0.2
  );

  const total =
    seatScore + usageFinal + frequencyScore + postureScore;

  return {
    total: Math.min(total, 100),
    seat: seatScore,
    usage: usageFinal,
    posture: postureScore
  };
}

function explainWinner(a, b) {
  const winner = a.score >= b.score ? a : b;
  const loser = winner === a ? b : a;

  const reasons = [];

  if (winner.usage.city > loser.usage.city)
    reasons.push("better city usability");

  if (winner.usage.highway > loser.usage.highway)
    reasons.push("more comfortable on highways");

  if (
    Math.abs(winner.ergonomics.seatHeight - userData.height) <
    Math.abs(loser.ergonomics.seatHeight - userData.height)
  )
    reasons.push("closer seat height match");

  return `
    🏆 <b>${winner.brand} ${winner.model} wins</b><br>
    <small>Because it has ${reasons.slice(0,2).join(" and ")}</small>
  `;
}

function recommend() {
  const type = document.getElementById("type").value;
  const results = document.getElementById("results");
  results.innerHTML = "";

  userData = {
    height: +document.getElementById("height").value,
    usage: +document.getElementById("usage").value,
    frequency: +document.getElementById("frequency").value
  };

  let list = vehicles.filter(v => v.type === type);

if (preBrand) {
  list = list.filter(
    v => v.brand.toLowerCase() === preBrand.toLowerCase()
  );
}

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
  <b>Overall: ${score.total}/100</b>

  <div class="metric">
    Seat Height Fit
    <div class="bar"><span style="width:${score.seat * 2.5}%"></span></div>
  </div>

  <div class="metric">
    Usage Match
    <div class="bar"><span style="width:${score.usage * 3.3}%"></span></div>
  </div>

  <div class="metric">
    Posture Comfort
    <div class="bar"><span style="width:${score.posture * 5}%"></span></div>
  </div>

  <button onclick='showDetails(${JSON.stringify(v)}, ${JSON.stringify(score)})'>
    Details
  </button>
`;
results.appendChild(card););
}

function showDetails(v, score) {
  document.getElementById("dName").innerText =
    `${v.brand} ${v.model}`;
  document.getElementById("dScore").innerText =
    `Overall Score: ${score.total}/100`;

  document.getElementById("barComfort").style.width =
    score.seat * 2.5 + "%";
  document.getElementById("barControl").style.width =
    score.usage * 3.3 + "%";
  document.getElementById("barPosture").style.width =
    score.posture * 5 + "%";
  document.getElementById("barUsage").style.width =
    score.usage * 3.3 + "%";

  document.getElementById("whyFit").innerHTML = `
    <li>Seat height matches your leg reach</li>
    <li>Usage pattern fits your riding style</li>
  `;

  document.getElementById("whyNot").innerHTML = `
    <li>Posture preference may vary</li>
  `;

  document.getElementById("detailModal").classList.remove("hidden");
}

function closeDetail() {
  document.getElementById("detailModal").classList.add("hidden");
}

function knowRide(brand, model) {
  const params = new URLSearchParams({
    brand: brand,
    model: model
  });

  window.location.href =
    "../Know_Your_Ride/know.html?" + params.toString();
}
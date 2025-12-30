console.log("select.js loaded");

const vehicles = VEHICLES;
let compareList = [];
let userData = {};

const selectedBrand = localStorage.getItem("selectedBrand");

document.getElementById("recommendBtn").onclick = recommend;

function calculateScore(vehicle, user) {
  let score = 0;

  /* 1️⃣ Seat height vs leg height (30) */
  const legHeight = user.legHeight || Math.round(user.height * 0.46);
  const seatDiff = Math.abs(vehicle.ergonomics.seatHeight - legHeight);

  let seatScore = 0;
  if (seatDiff <= 20) seatScore = 30;
  else if (seatDiff <= 40) seatScore = 22;
  else if (seatDiff <= 60) seatScore = 15;
  else seatScore = 5;

  score += seatScore;

  /* 2️⃣ Usage match (25) */
  const usageScore =
    user.usage < 50
      ? vehicle.usage.city
      : vehicle.usage.highway;

  score += (usageScore / 100) * 25;

  /* 3️⃣ Skill level match (15) */
  const skillMap = {
    beginner: 15,
    intermediate: 10,
    expert: 7
  };

  score += skillMap[vehicle.skillLevel] || 8;

  /* 4️⃣ Posture comfort (15) */
  const postureScore =
    vehicle.ergonomics.posture === "upright" ? 15 :
    vehicle.ergonomics.posture === "relaxed" ? 14 :
    vehicle.ergonomics.posture === "sport" ? 10 :
    12;

  score += postureScore;

  /* 5️⃣ Usage frequency (15) */
  score += (user.frequency / 100) * 15;

  return Math.round(Math.min(score, 100));
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
    results.innerHTML += `
      <div class="card">
        <b>${v.brand} ${v.model}</b><br>
        Score: ${score}/100<br><br>
        <button onclick='showDetails("${v.brand} ${v.model}", ${score})'>Details</button>
      </div>
    `;
  });
}

function showDetails(name, score) {
  document.getElementById("dName").innerText = name;
  document.getElementById("dScore").innerText = `Score: ${score}/100`;
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
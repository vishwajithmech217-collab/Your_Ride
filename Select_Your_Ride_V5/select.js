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
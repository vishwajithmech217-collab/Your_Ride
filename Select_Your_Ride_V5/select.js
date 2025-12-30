console.log("select.js loaded");

const vehicles = VEHICLES;
let compareList = [];
let userData = {};

const selectedBrand = localStorage.getItem("selectedBrand");

document.getElementById("recommendBtn").onclick = recommend;

function calculateScore(v, u) {
  let score = 0;
  score += Math.max(0, 40 - Math.abs(u.height - v.seatHeight) / 5);
  score += (u.usage < 50 ? v.cityBias : v.highwayBias) * 0.4;
  score += u.frequency * 0.2;
  return Math.round(Math.min(score, 100));
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

  if (selectedBrand) {
    list = list.filter(v =>
      v.brand.toLowerCase().includes(selectedBrand.replace("_", ""))
    );
  }

  if (!list.length) {
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
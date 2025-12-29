console.log("select.js loaded");

let compareList = [];

/* VEHICLE DATA */
const vehicles = [
  {
    name: "Yamaha MT-15",
    type: "bike",
    seatHeight: 810,
    posture: "sport",
    cityBias: 70,
    highwayBias: 80
  },
  {
    name: "Royal Enfield Classic 350",
    type: "bike",
    seatHeight: 805,
    posture: "upright",
    cityBias: 60,
    highwayBias: 85
  },
  {
    name: "Honda Activa",
    type: "scooter",
    seatHeight: 765,
    posture: "relaxed",
    cityBias: 90,
    highwayBias: 40
  },
  {
    name: "Hyundai i20",
    type: "car",
    seatHeight: 1650,
    posture: "seated",
    cityBias: 75,
    highwayBias: 80
  }
];

function calculateScore(vehicle, user) {
  let score = 0;

  // Height vs Seat Height logic
  const heightDiff = Math.abs(user.height - vehicle.seatHeight);
  score += Math.max(0, 40 - heightDiff / 5);

  // Usage logic
  const usageScore =
    user.usage < 50 ? vehicle.cityBias : vehicle.highwayBias;
  score += usageScore * 0.4;

  // Frequency logic
  score += user.frequency * 0.2;

  return Math.round(Math.min(score, 100));
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("detailModal").classList.add("hidden");
});

document.getElementById("advancedBtn").addEventListener("click", () => {
  document.getElementById("advancedBox").classList.toggle("hidden");
});

document.getElementById("recommendBtn").addEventListener("click", recommend);

function recommend() {
  const type = document.getElementById("type").value;
  const results = document.getElementById("results");
  results.innerHTML = "";

  const user = {
    height: Number(document.getElementById("height").value),
    usage: Number(document.getElementById("usage").value),
    frequency: Number(document.getElementById("frequency").value)
  };

  const list = vehicles.filter(v => v.type === type);

  list.forEach(v => {
    const score = calculateScore(v, user);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <b>${v.name}</b><br>
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

  compareList.forEach((v, i) => {
    const other = i === 0 ? b : a;

    const deltaScore = v.score - other.score;
    const deltaUsage = v.cityBias - other.cityBias;

    const div = document.createElement("div");
    div.className = "compare-card";

    if (winner && v.name === winner.name) {
      div.classList.add("winner");
    }

    div.innerHTML = `
      ${winner && v.name === winner.name
        ? `<div class="winner-badge">BEST MATCH</div>`
        : ""}

      <h3>${v.name}</h3>
      <p><b>Score:</b> ${v.score}/100</p>

      <div class="bar">
        <span style="width:${v.score}%"></span>
      </div>

      <div class="delta ${deltaScore >= 0 ? "plus" : "minus"}">
        Overall ${deltaScore >= 0 ? "+" : ""}${deltaScore}
      </div>

      <div class="delta ${deltaUsage >= 0 ? "plus" : "minus"}">
        City Usage ${deltaUsage >= 0 ? "+" : ""}${deltaUsage}
      </div>
    `;

    grid.appendChild(div);
  });

  document.getElementById("compareModal").classList.remove("hidden");
}

function showDetails(v, score) {
  document.getElementById("dName").innerText = v.name;
  document.getElementById("dScore").innerText =
    "Overall Score: " + score + "/100";

  // Bars are derived logically
  document.getElementById("barComfort").style.width = score + "%";
  document.getElementById("barControl").style.width = v.cityBias + "%";
  document.getElementById("barPosture").style.width =
    v.posture === "sport" ? "70%" :
    v.posture === "upright" ? "85%" : "75%";
  document.getElementById("barUsage").style.width = v.highwayBias + "%";

  document.getElementById("whyFit").innerHTML = `
    <li>Seat height matches your height range</li>
    <li>Usage aligns with your riding pattern</li>
  `;

  document.getElementById("whyNot").innerHTML = `
    <li>Posture preference may vary</li>
  `;

  document.getElementById("detailModal").classList.remove("hidden");
}

function closeCompare() {
  compareList = [];
  document.getElementById("compareModal").classList.add("hidden");
}

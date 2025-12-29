console.log("select.js loaded");

let compareList = [];

/* VEHICLE DATA */
const vehicles = VEHICLES;

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
  console.log("Recommend clicked", vehicles);

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
${deltaBar(
  "City Usage",
  v.cityBias,
  compareList.find(x => x !== v).cityBias
)}

${deltaBar(
  "Highway Usage",
  v.highwayBias,
  compareList.find(x => x !== v).highwayBias
)}
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

      function deltaBar(label, a, b) {
  const diff = a - b;
  const sign = diff >= 0 ? "+" : "";
  const color = diff >= 0 ? "#22c55e" : "#ef4444";

  return `
    <div>
      ${label}: <b style="color:${color}">${sign}${diff}</b>
      <div class="bar">
        <span style="width:${Math.abs(diff)}%; background:${color}"></span>
      </div>
    </div>
  `;
}

      <div class="delta ${deltaScore >= 0 ? "plus" : "minus"}">
        Overall ${deltaScore >= 0 ? "+" : ""}${deltaScore}
      </div>

      <div class="delta ${deltaUsage >= 0 ? "plus" : "minus"}">
        City Usage ${deltaUsage >= 0 ? "+" : ""}${deltaUsage}
      </div>
    `;

    grid.appendChild(div);
  });

 const resultBox = document.createElement("div");
resultBox.className = "card";
resultBox.innerHTML = explainWinner(compareList[0], compareList[1]);
grid.appendChild(resultBox);
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

function closeDetail(e) {
  if (e) e.stopPropagation();
  document.getElementById("detailModal").classList.add("hidden");
}

function explainWinner(a, b) {
  let winner, loser;

  if (a.score >= b.score) {
    winner = a;
    loser = b;
  } else {
    winner = b;
    loser = a;
  }

  const reasons = [];

  if (winner.cityBias > loser.cityBias) {
    reasons.push("better city usage suitability");
  }

  if (winner.highwayBias > loser.highwayBias) {
    reasons.push("better highway comfort");
  }

  if (Math.abs(winner.seatHeight - userData.height) <
      Math.abs(loser.seatHeight - userData.height)) {
    reasons.push("closer seat height match for your height");
  }

  return `
    🏆 <b>${winner.name} wins</b><br>
    <small>Because it has ${reasons.slice(0,2).join(" and ")}</small>
  `;
}

function closeCompare() {
  compareList = [];
  document.getElementById("compareModal").classList.add("hidden");
}

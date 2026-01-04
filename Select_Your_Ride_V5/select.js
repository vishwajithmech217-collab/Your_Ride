console.log("select.js loaded");

const vehicles = window.VEHICLES || [];
let compareList = [];
let currentDetail = null;

document.getElementById("advancedBtn").onclick = () =>
  document.getElementById("advancedBox").classList.toggle("hidden");

/* HELPERS */
function legHeightCalc(height, leg) {
  return leg && leg > 0 ? leg : Math.round(height * 0.46);
}

/* SCORE OUT OF 10 */
function calculateScore(vehicle, user) {
  let score = 0;
  let reasons = [];

  const leg = legHeightCalc(user.height, user.legHeight);
  const seat = vehicle.ergonomics.seatHeight / 10;
  const diff = Math.abs(seat - leg);

  let seatScore = diff <= 5 ? 4 : diff <= 15 ? 3 : diff <= 30 ? 2 : 1;
  score += seatScore;
  reasons.push(`Seat fit: ${seatScore}/4`);

  let usagePref = user.usage < 50 ? vehicle.usage.city : vehicle.usage.highway;
  let usageScore = usagePref >= 80 ? 3 : usagePref >= 60 ? 2 : 1;
  score += usageScore;
  reasons.push(`Usage match: ${usageScore}/3`);

  let freqScore = user.frequency < 40 ? 2 : user.frequency < 70 ? 1 : 0;
  score += freqScore;
  reasons.push(`Frequency fit: ${freqScore}/2`);

  let weightScore = 1;
  if (
    (user.weight < 50 && vehicle.physical.kerbWeight > 180) ||
    (user.weight > 90 && vehicle.physical.kerbWeight < 120)
  ) weightScore = 0;

  score += weightScore;
  reasons.push(weightScore ? "Weight compatible" : "Weight mismatch");

  return { total: score, reasons };
}

/* RECOMMEND */
function recommend() {
  const height = +height.value;
  const weight = +weight.value;

  if (!height || !weight) return alert("Enter height & weight");

  const user = {
    height,
    weight,
    usage: +usage.value,
    frequency: +frequency.value,
    legHeight: +legHeight.value || null
  };

  results.innerHTML = "";

  const list = vehicles
    .filter(v => v.type === type.value)
    .map(v => ({ vehicle: v, score: calculateScore(v, user) }))
    .sort((a,b) => b.score.total - a.score.total);

  list.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "card" + (i === 0 ? " winner" : "");
    card.innerHTML = `
      <h3>${item.vehicle.brand} ${item.vehicle.model}</h3>
      <b>${item.score.total}/10</b>
      <button onclick='showDetails(${JSON.stringify(item.vehicle)}, ${JSON.stringify(item.score)})'>Details</button>
    `;
    results.appendChild(card);
  });
}

/* DETAILS */
function showDetails(vehicle, score) {
  currentDetail = { vehicle, score };
  detailTitle.innerText = vehicle.brand + " " + vehicle.model;
  detailScore.innerText = score.total;
  detailReasons.innerHTML = score.reasons.map(r => `<li>${r}</li>`).join("");
  detailModal.classList.remove("hidden");
}

function closeDetails() {
  detailModal.classList.add("hidden");
}

/* COMPARE */
function addToCompare() {
  if (!currentDetail) {
    alert("No vehicle selected");
    return;
  }

  if (compareList.length >= 2) {
    alert("You can compare only 2 vehicles");
    return;
  }

  compareList.push(currentDetail);

  if (compareList.length === 2) {
    showCompare();
  }

  closeDetails();
}

function showCompare() {
  const grid = document.getElementById("compareGrid");
  grid.innerHTML = "";

  compareList.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h4>${item.vehicle.brand} ${item.vehicle.model}</h4>
      <b>${item.score.total}/10</b>
      <p>${item.score.reasons.join("<br>")}</p>
    `;

    grid.appendChild(card);
  });

  document.getElementById("compareModal")
    .classList.remove("hidden");
}


function closeCompare() {
  compareList = [];
  compareModal.classList.add("hidden");
}

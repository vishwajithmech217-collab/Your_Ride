console.log("select.js loaded");

/* =======================
   GLOBAL STATE
======================= */
let compareList = [];
let currentDetail = null;

/* =======================
   SAFE DATA ACCESS
======================= */
function getVehicles() {
  return window.VEHICLES || [];
}

/* =======================
   DOM READY
======================= */
document.addEventListener("DOMContentLoaded", () => {
  populateVehicleTypes();
  toggleSetup();
  hideModals();
});

/* =======================
   UI HELPERS
======================= */
function toggleSetup() {
  const btn = document.getElementById("advancedBtn");
  const box = document.getElementById("advancedBox");
  if (btn && box) btn.onclick = () => box.classList.toggle("hidden");
}

function hideModals() {
  document.getElementById("detailModal")?.classList.add("hidden");
  document.getElementById("compareModal")?.classList.add("hidden");
}

/* =======================
   VEHICLE TYPE DROPDOWN
======================= */
function populateVehicleTypes() {
  const select = document.getElementById("type");
  if (!select) return;

  const vehicles = getVehicles();
  const types = [...new Set(vehicles.map(v => v.type))];

  select.innerHTML = `<option value="">Select vehicle type</option>`;
  types.forEach(t => select.add(new Option(t.toUpperCase(), t)));
}

/* =======================
   CORE CALCULATIONS
======================= */
function calcLegHeight(height, leg) {
  return leg || Math.round(height * 0.46);
}

function calculateScore(vehicle, user) {
  const breakdown = {};

  /* Seat fit */
  const diff = Math.abs(
    vehicle.seatHeight - calcLegHeight(user.height, user.legHeight)
  );

  breakdown.seat =
    diff <= 50 ? 4 :
    diff <= 150 ? 3 :
    diff <= 300 ? 2 : 1;

  /* Usage match */
  const usageVal =
    user.usage < 50
      ? (user.frequency < 50
          ? vehicle.usage.city_daily
          : vehicle.usage.city_occasional)
      : (user.frequency < 50
          ? vehicle.usage.highway_daily
          : vehicle.usage.highway_occasional);

  breakdown.usage = usageVal >= 80 ? 3 : usageVal >= 60 ? 2 : 1;

  /* Frequency */
  breakdown.frequency =
    user.frequency < 40 ? 2 :
    user.frequency < 70 ? 1 : 0;

  /* Weight compatibility */
  breakdown.weight =
    (user.weight < 50 && vehicle.kerbWeight > 180) ||
    (user.weight > 90 && vehicle.kerbWeight < 120)
      ? 0
      : 1;

  const total =
    breakdown.seat +
    breakdown.usage +
    breakdown.frequency +
    breakdown.weight;

  return { total, breakdown };
}

/* =======================
   RECOMMENDATION ENGINE
======================= */
function recommend() {
  const user = {
    height: +height.value,
    weight: +weight.value,
    legHeight: +legHeight.value || null,
    usage: +usage.value,
    frequency: +frequency.value
  };

  if (!user.height || !user.weight) {
    alert("Please enter height and weight");
    return;
  }

  if (!type.value) {
    alert("Please select vehicle type");
    return;
  }

  const vehicles = getVehicles();
  const filtered = vehicles.filter(v => v.type === type.value);

  if (!filtered.length) {
    renderResults([]);
    return;
  }

  const scored = filtered.map(v => ({
    vehicle: v,
    score: calculateScore(v, user)
  }));

  /* Best per body type */
  const grouped = {};
  scored.forEach(item => {
    const key = item.vehicle.bodyType;
    if (!grouped[key] || grouped[key].score.total < item.score.total) {
      grouped[key] = item;
    }
  });

  renderResults(Object.values(grouped));
}

/* =======================
   RESULTS RENDER
======================= */
function renderResults(list) {
  const box = document.getElementById("results");
  box.innerHTML = "";

  if (!list.length) {
    box.innerHTML = "<p>No suitable vehicles found</p>";
    return;
  }

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card winner";

    card.innerHTML = `
      <h4>${item.vehicle.bodyType}</h4>
      <b>${item.vehicle.brand} ${item.vehicle.model}</b>
      <div class="score">${item.score.total}/10</div>
      <button>Details</button>
      <span class="more">More Models →</span>
    `;

    card.querySelector("button").onclick = () => showDetails(item);
    box.appendChild(card);
  });
}

/* =======================
   DETAILS MODAL
======================= */
function showDetails(item) {
  currentDetail = item;

  detailTitle.innerText =
    `${item.vehicle.brand} ${item.vehicle.model}`;
  detailScore.innerText = item.score.total;

  detailReasons.innerHTML = `
    <li>Seat Fit: ${item.score.breakdown.seat}/4</li>
    <li>Usage Match: ${item.score.breakdown.usage}/3</li>
    <li>Frequency: ${item.score.breakdown.frequency}/2</li>
    <li>Weight Compatibility: ${item.score.breakdown.weight}/1</li>
  `;

  detailModal.classList.remove("hidden");
}

function closeDetails() {
  detailModal.classList.add("hidden");
}

/* =======================
   COMPARE
======================= */
function addToCompare() {
  if (!currentDetail) return;
  if (compareList.length === 2) {
    alert("You can compare only 2 vehicles");
    return;
  }

  compareList.push(currentDetail);
  if (compareList.length === 2) showCompare();
}

function showCompare() {
  compareGrid.innerHTML = "";

  compareList.forEach(item => {
    const c = document.createElement("div");
    c.className = "compare-card";
    c.innerHTML = `
      <h4>${item.vehicle.model}</h4>
      <b>${item.score.total}/10</b>
    `;
    compareGrid.appendChild(c);
  });

  compareModal.classList.remove("hidden");
}

function closeCompare() {
  compareList = [];
  compareModal.classList.add("hidden");
}

/* =======================
   EXPOSE TO HTML
======================= */
window.recommend = recommend;
window.closeDetails = closeDetails;
window.addToCompare = addToCompare;
window.closeCompare = closeCompare;

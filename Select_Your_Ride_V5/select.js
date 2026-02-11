console.log("select.js loaded");

/* =======================
   GLOBAL STATE
======================= */
let compareList = [];
let currentDetail = null;

/* =======================
   WAIT FOR DATA
======================= */
function waitForVehicles(cb) {
  const interval = setInterval(() => {
    if (Array.isArray(window.VEHICLES) && window.VEHICLES.length) {
      clearInterval(interval);
      cb();
    }
  }, 50);
}

/* =======================
   DOM READY
======================= */
document.addEventListener("DOMContentLoaded", () => {
  toggleSetup();
  hideModals();

  waitForVehicles(() => {
    populateVehicleTypes();
    console.log("Vehicles loaded:", window.VEHICLES.length);
  });
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
   VEHICLE TYPES
======================= */
function populateVehicleTypes() {
  const select = document.getElementById("type");
  if (!select) return;

  const types = [
    ...new Set(window.VEHICLES.map(v => String(v.type).toLowerCase()))
  ];

  select.innerHTML = `<option value="">Select vehicle type</option>`;
  types.forEach(t => select.add(new Option(t.toUpperCase(), t)));
}

/* =======================
   CORE CALCS
======================= */
function calcLegHeight(h, l) {
  return l || Math.round(h * 0.46);
}

function calculateScore(vehicle, user) {
  const breakdown = {};

// Dynamic Seat Fit (0–4)
if (vehicle.ergonomics?.seatHeight_mm) {
  const ideal = calcLegHeight(user.height, user.legHeight);
  const seat = vehicle.ergonomics.seatHeight_mm;

  const diff = Math.abs(seat - ideal);

  // Smooth scoring
  breakdown.seat = Math.max(0, 4 - (diff / 40));
} else {
  breakdown.seat = 3;
}

  // Usage
  const usageVal =
    user.usage < 50
      ? (user.frequency < 50
          ? vehicle.usage?.city_daily
          : vehicle.usage?.city_occasional)
      : (user.frequency < 50
          ? vehicle.usage?.highway_daily
          : vehicle.usage?.highway_occasional);

  breakdown.usage =
    usageVal >= 80 ? 3 :
    usageVal >= 60 ? 2 : 1;

  // Frequency
  breakdown.frequency =
    user.frequency < 40 ? 2 :
    user.frequency < 70 ? 1 : 0;

  // Weight compatibility
  const kerb =
    vehicle.physical?.kerbWeight ??
    vehicle.kerbWeight ??
    0;

  breakdown.weight =
    (user.weight < 50 && kerb > 180) ||
    (user.weight > 90 && kerb < 120)
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
   RECOMMEND
======================= */
function recommend() {
  if (!window.VEHICLES?.length) {
    alert("Vehicle data not loaded yet");
    return;
  }

  if (!type.value) {
    alert("Please select vehicle type");
    return;
  }

  const user = {
    height: +height.value,
    weight: +weight.value,
    legHeight: +legHeight.value || null,
    usage: +usage.value,
    frequency: +frequency.value
  };

  if (!user.height || !user.weight) {
    alert("Enter height & weight");
    return;
  }

  const filtered = window.VEHICLES.filter(
    v => String(v.type).toLowerCase() === type.value
  );

  const scored = filtered.map(v => ({
    vehicle: v,
    score: calculateScore(v, user)
  }));

  const best = {};
  scored.forEach(item => {
    const key = item.vehicle.bodyType || "Other";
    if (!best[key] || best[key].score.total < item.score.total) {
      best[key] = item;
    }
  });

  renderResults(Object.values(best));
}

/* =======================
   RENDER RESULTS
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
    `;
    card.querySelector("button").onclick = () => showDetails(item);
    box.appendChild(card);
  });
}

/* =======================
   DETAILS
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

function makeBar(label, value, max) {
  const percent = Math.round((value / max) * 100);

  return `
    <div class="chart">
      <div class="chart-label">${label}: ${value}/${max}</div>
      <div class="chart-bar">
        <div class="chart-fill" data-width="${percent}%"></div>
      </div>
    </div>
  `;
}


function showCompare() {
  compareGrid.innerHTML = "";

  compareList.forEach(item => {
    const { vehicle, score } = item;

    const card = document.createElement("div");
    card.className = "compare-card";

    card.innerHTML = `
      <h4>${vehicle.brand} ${vehicle.model}</h4>
      <b>${score.total}/10</b>

      ${makeBar("Seat Fit", score.breakdown.seat, 4)}
      ${makeBar("Usage", score.breakdown.usage, 3)}
      ${makeBar("Frequency", score.breakdown.frequency, 2)}
      ${makeBar("Weight", score.breakdown.weight, 1)}
    `;

    compareGrid.appendChild(card);
  });

  compareModal.classList.remove("hidden");

  // animate bars
  setTimeout(() => {
    document.querySelectorAll(".chart-fill").forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }, 100);
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

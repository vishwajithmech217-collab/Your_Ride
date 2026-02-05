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

  const types = [...new Set(   window.VEHICLES.map(v => v.type.toLowerCase()) )];

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

  const diff = Math.abs(
    vehicle.seatHeight - calcLegHeight(user.height, user.legHeight)
  );

  breakdown.seat =
    diff <= 50 ? 4 :
    diff <= 150 ? 3 :
    diff <= 300 ? 2 : 1;

  const usageVal =
    user.usage < 50
      ? (user.frequency < 50
          ? vehicle.usage.city_daily
          : vehicle.usage.city_occasional)
      : (user.frequency < 50
          ? vehicle.usage.highway_daily
          : vehicle.usage.highway_occasional);

  breakdown.usage = usageVal >= 80 ? 3 : usageVal >= 60 ? 2 : 1;

  breakdown.frequency =
    user.frequency < 40 ? 2 :
    user.frequency < 70 ? 1 : 0;

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

  const filtered = window.VEHICLES.filter(v => v.type.toLowerCase() === type.value);

  const scored = filtered.map(v => ({
    vehicle: v,
    score: calculateScore(v, user)
  }));

  const best = {};
  scored.forEach(item => {
    const k = item.vehicle.bodyType;
    if (!best[k] || best[k].score.total < item.score.total) {
      best[k] = item;
    }
  });

  renderResults(Object.values(best));
}

/* =======================
   RENDER
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
  detailTitle.innerText = `${item.vehicle.brand} ${item.vehicle.model}`;
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
   EXPOSE
======================= */
window.recommend = recommend;
window.closeDetails = closeDetails;

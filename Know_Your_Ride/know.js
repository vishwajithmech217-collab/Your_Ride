/* =========================
   LOAD VEHICLE DATA
   ========================= */
// reuse the same data file
// <script src="../Select/data/vehicles.data.js"></script>

const brandSelect = document.getElementById("brandSelect");
const typeSelect = document.getElementById("typeSelect");
const modelSelect = document.getElementById("modelSelect");
const usageSelect = document.getElementById("usageSelect");

const previewName = document.querySelector(".model-name");
const previewList = document.querySelector(".preview-card ul");
const knowMoreBtn = document.querySelector(".know-more-btn");

const timelinePoints = document.querySelectorAll(".timeline-point");

/* =========================
   INIT – FILL BRAND DROPDOWN
   ========================= */
const brands = [...new Set(VEHICLES.map(v => v.brand))];

brands.forEach(brand => {
  const opt = document.createElement("option");
  opt.value = brand;
  opt.textContent = brand;
  brandSelect.appendChild(opt);
});

/* =========================
   BRAND → TYPE
   ========================= */
brandSelect.addEventListener("change", () => {
  resetType();
  resetModel();
  resetPreview();
  resetTimeline();

  if (!brandSelect.value) return;

  const types = [
    ...new Set(
      VEHICLES
        .filter(v => v.brand === brandSelect.value)
        .map(v => v.type)
    )
  ];

  typeSelect.disabled = false;
  types.forEach(type => {
    const opt = document.createElement("option");
    opt.value = type;
    opt.textContent = type;
    typeSelect.appendChild(opt);
  });

  highlightBrandTimeline();
});

/* =========================
   TYPE → MODEL
   ========================= */
typeSelect.addEventListener("change", () => {
  resetModel();
  resetPreview();
  resetTimeline();

  if (!typeSelect.value) return;

  const models = VEHICLES.filter(
    v =>
      v.brand === brandSelect.value &&
      v.type === typeSelect.value
  );

  modelSelect.disabled = false;
  models.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v.id;
    opt.textContent = v.model;
    modelSelect.appendChild(opt);
  });
});

/* =========================
   MODEL → PREVIEW
   ========================= */
modelSelect.addEventListener("change", () => {
  resetPreview();
  resetTimeline();

  const vehicle = VEHICLES.find(v => v.id === modelSelect.value);
  if (!vehicle) return;

  previewName.textContent =
    `${vehicle.brand} · ${vehicle.model}`;

  previewList.innerHTML = `
    <li>Category: ${vehicle.segment}</li>
    <li>Introduced: ${vehicle.launchYear || "—"}</li>
    <li>Type: ${vehicle.type}</li>
  `;

  knowMoreBtn.href =
    `know-more.html?brand=${vehicle.brand}&model=${vehicle.model}`;

  highlightModelTimeline(vehicle);
});

/* =========================
   USAGE (OPTIONAL)
   ========================= */
usageSelect.addEventListener("change", () => {
  if (!modelSelect.value) return;

  const usage = usageSelect.value;
  if (!usage) return;

  const li = document.createElement("li");
  li.textContent = `Best for: ${usage}`;
  previewList.appendChild(li);
});

/* =========================
   TIMELINE HELPERS
   ========================= */
function highlightBrandTimeline() {
  // simple visual cue (first dot)
  if (timelinePoints[0]) {
    timelinePoints[0].classList.add("active");
  }
}

function highlightModelTimeline(vehicle) {
  timelinePoints.forEach(p => {
    const year = p.querySelector(".year").innerText;
    if (
      vehicle.launchYear &&
      year == vehicle.launchYear
    ) {
      p.classList.add("active");
    }
  });
}

function resetTimeline() {
  timelinePoints.forEach(p =>
    p.classList.remove("active")
  );
}

/* =========================
   RESET HELPERS
   ========================= */
function resetType() {
  typeSelect.innerHTML =
    `<option value="">Select type</option>`;
  typeSelect.disabled = true;
}

function resetModel() {
  modelSelect.innerHTML =
    `<option value="">Select model</option>`;
  modelSelect.disabled = true;
}

function resetPreview() {
  previewName.textContent = "Brand · Model Name";
  previewList.innerHTML = `
    <li>Category: —</li>
    <li>Introduced: —</li>
    <li>Engine / Power summary</li>
  `;
  knowMoreBtn.href = "#";
}
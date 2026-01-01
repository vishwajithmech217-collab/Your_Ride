document.addEventListener("DOMContentLoaded", () => {

  console.log("know.js loaded");
  console.log("VEHICLES:", VEHICLES);

  // DOM ELEMENTS
  const brandSelect = document.getElementById("brandSelect");
  const typeSelect = document.getElementById("typeSelect");
  const modelSelect = document.getElementById("modelSelect");

// -------- MODEL → PREVIEW UPDATE --------
modelSelect.addEventListener("change", () => {

  const selectedId = modelSelect.value;
  if (!selectedId) return;

  const vehicle = VEHICLES.find(v => v.id === selectedId);
  if (!vehicle) return;

  // Update preview text
  document.querySelector(".model-name").textContent =
    `${vehicle.brand} · ${vehicle.model}`;

  const previewList = document.querySelector(".preview-card ul");
  previewList.innerHTML = `
    <li>Category: ${vehicle.segment.replace("_", " ")}</li>
    <li>Type: ${vehicle.type}</li>
    <li>Skill level: ${vehicle.skillLevel}</li>
  `;

  // Store selected vehicle for Know More page
  document.querySelector(".know-more-btn").href =
    `model.html?id=${vehicle.id}`;

  // -------- TIMELINE HIGHLIGHT (STEP F) --------
const points = document.querySelectorAll(".timeline-point");
points.forEach(p => p.classList.remove("active"));

// Simple logic: highlight by type category
if (vehicle.type === "bike") {
  points[1]?.classList.add("active");
}
if (vehicle.type === "scooter") {
  points[2]?.classList.add("active");
}
if (vehicle.type === "car" || vehicle.type === "suv") {
  points[3]?.classList.add("active");
}

});
  
  // -------- BRAND POPULATION --------
  function loadBrands() {
    const brands = [...new Set(VEHICLES.map(v => v.brand))];

    console.log("Brands found:", brands);

    brands.forEach(brand => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      brandSelect.appendChild(option);
    });
  }

  // -------- BRAND → TYPE --------
  brandSelect.addEventListener("change", () => {
    typeSelect.innerHTML = `<option value="">Select type</option>`;
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    typeSelect.disabled = false;
    modelSelect.disabled = true;

    const selectedBrand = brandSelect.value;

    const types = [
      ...new Set(
        VEHICLES
          .filter(v => v.brand === selectedBrand)
          .map(v => v.type)
      )
    ];

    types.forEach(type => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      typeSelect.appendChild(option);
    });
  });

  // -------- TYPE → MODEL --------
  typeSelect.addEventListener("change", () => {
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    modelSelect.disabled = false;

    const brand = brandSelect.value;
    const type = typeSelect.value;

    const models = VEHICLES.filter(
      v => v.brand === brand && v.type === type
    );

    models.forEach(v => {
      const option = document.createElement("option");
      option.value = v.id;
      option.textContent = v.model;
      modelSelect.appendChild(option);
    });
  });

  // INIT
  loadBrands();

});

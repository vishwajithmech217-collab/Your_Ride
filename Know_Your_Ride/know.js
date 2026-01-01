console.log("First vehicle object:", VEHICLES[0]);

console.log("JS running");
console.log("VEHICLES:", VEHICLES);

console.log("Know Your Ride JS loaded");

const brandSelect = document.getElementById("brandSelect");
const typeSelect = document.getElementById("typeSelect");
const modelSelect = document.getElementById("modelSelect");

// Safety check
if (!window.VEHICLES || !Array.isArray(VEHICLES)) {
  console.error("VEHICLES not loaded");
  return;
}

// -------------------------
// 1. Populate Brand
// -------------------------
const brands = [...new Set(VEHICLES.map(v => v.brand))];

brands.forEach(brand => {
  const opt = document.createElement("option");
  opt.value = brand;
  opt.textContent = brand;
  brandSelect.appendChild(opt);
});

// -------------------------
// 2. Brand → Type
// -------------------------
brandSelect.addEventListener("change", () => {
  typeSelect.innerHTML = `<option value="">Select type</option>`;
  modelSelect.innerHTML = `<option value="">Select model</option>`;
  typeSelect.disabled = true;
  modelSelect.disabled = true;

  const brand = brandSelect.value;
  if (!brand) return;

  const types = [
    ...new Set(
      VEHICLES
        .filter(v => v.brand === brand)
        .map(v => v.type)
    )
  ];

  types.forEach(type => {
    const opt = document.createElement("option");
    opt.value = type;
    opt.textContent = type;
    typeSelect.appendChild(opt);
  });

  typeSelect.disabled = false;
});

// -------------------------
// 3. Type → Model
// -------------------------
typeSelect.addEventListener("change", () => {
  modelSelect.innerHTML = `<option value="">Select model</option>`;
  modelSelect.disabled = true;

  const brand = brandSelect.value;
  const type = typeSelect.value;
  if (!type) return;

  const models = VEHICLES.filter(
    v => v.brand === brand && v.type === type
  );

  models.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v.id;
    opt.textContent = v.model;
    modelSelect.appendChild(opt);
  });

  modelSelect.disabled = false;
});

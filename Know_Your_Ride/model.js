document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const modelId = params.get("id");

  if (!modelId) {
    document.getElementById("modelTitle").textContent = "Invalid vehicle";
    return;
  }

  if (!window.BRANDS || window.BRANDS.length === 0) {
    document.getElementById("modelTitle").textContent = "Data not loaded";
    return;
  }

  let foundBrand = null;
  let foundModel = null;

  window.BRANDS.forEach(brand => {
    brand.models.forEach(model => {
      if (model.id === modelId) {
        foundBrand = brand;
        foundModel = model;
      }
    });
  });

  if (!foundModel) {
    document.getElementById("modelTitle").textContent = "Vehicle not found";
    return;
  }

  // HEADER
  document.getElementById("modelTitle").textContent =
    `${foundBrand.brand} · ${foundModel.name}`;

  // BASIC INFO
  document.getElementById("brand").textContent = foundBrand.brand;
  document.getElementById("category").textContent = foundModel.category;
  document.getElementById("engine").textContent = foundModel.engine;
  document.getElementById("year").textContent = foundModel.launchYear;
  document.getElementById("type").textContent = foundModel.type;

  // SPECS
  const specs = foundModel.specs || {};

  document.getElementById("specPower").textContent   = specs.power || "—";
  document.getElementById("specTorque").textContent  = specs.torque || "—";
  document.getElementById("specMileage").textContent = specs.mileage || "—";
  document.getElementById("specWeight").textContent  = specs.weight || "—";
  document.getElementById("specFuel").textContent    = specs.fuel || "—";
});

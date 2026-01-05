console.log("model.js loaded");

const params = new URLSearchParams(window.location.search);
const modelId = params.get("id");

if (!modelId) {
  document.body.innerHTML = "<h2>Invalid vehicle</h2>";
  throw new Error("No model id");
}

let foundModel = null;
let foundBrand = null;

window.BRANDS.forEach(brand => {
  brand.models.forEach(model => {
    if (model.id === modelId) {
      foundModel = model;
      foundBrand = brand.brand;
    }
  });
});

if (!foundModel) {
  document.body.innerHTML = "<h2>Vehicle not found</h2>";
  throw new Error("Model not found");
}

// Fill UI
document.getElementById("modelName").textContent = foundModel.name;
document.getElementById("brand").textContent = foundBrand;
document.getElementById("type").textContent = foundModel.type;
document.getElementById("segment").textContent = foundModel.segment;
document.getElementById("engine").textContent = foundModel.engine;
document.getElementById("year").textContent = foundModel.launchYear;
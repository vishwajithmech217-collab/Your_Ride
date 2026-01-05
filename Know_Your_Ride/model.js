document.addEventListener("DOMContentLoaded", () => {
  console.log("model.js loaded");

  if (!window.BRANDS) {
    document.body.innerHTML = "<h2>Data not loaded</h2>";
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const modelId = params.get("id");

  if (!modelId) {
    document.body.innerHTML = "<h2>No model selected</h2>";
    return;
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
    return;
  }

  document.getElementById("modelTitle").textContent =
    `${foundBrand} ${foundModel.name}`;

  document.getElementById("modelInfo").innerHTML = `
    <li><b>Brand:</b> ${foundBrand}</li>
    <li><b>Model:</b> ${foundModel.name}</li>
    <li><b>ID:</b> ${foundModel.id}</li>
  `;
});
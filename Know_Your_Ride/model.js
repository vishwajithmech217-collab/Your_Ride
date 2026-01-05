document.addEventListener("DOMContentLoaded", () => {
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
        foundBrand = brand;
      }
    });
  });

  if (!foundModel) {
    document.body.innerHTML = "<h2>Vehicle not found</h2>";
    return;
  }

  // Populate UI
  document.getElementById("modelTitle").textContent =
    `${foundBrand.brand} ${foundModel.name}`;

  document.getElementById("modelDetails").innerHTML = `
    <li>Category: ${foundModel.category || "-"}</li>
    <li>Engine: ${foundModel.engine || "-"}</li>
    <li>Launch year: ${foundModel.launchYear || "-"}</li>
    <li>Type: ${foundModel.type || "-"}</li>
  `;
});
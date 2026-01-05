alert(
  window.BRANDS
    ? "BRANDS loaded: " + window.BRANDS.length
    : "BRANDS NOT LOADED"
);

document.addEventListener("DOMContentLoaded", () => {
  console.log("know.js loaded");
  console.log("BRANDS:", window.BRANDS);

  const brandSelect = document.getElementById("brandSelect");
  const modelSelect = document.getElementById("modelSelect");

  /* -------- LOAD BRANDS -------- */
  function loadBrands() {
    brandSelect.innerHTML = `<option value="">Select brand</option>`;

    window.BRANDS.forEach(brand => {
      const option = document.createElement("option");
      option.value = brand.brand;
      option.textContent = brand.brand;
      brandSelect.appendChild(option);
    });
  }

  /* -------- BRAND → MODELS -------- */
  brandSelect.addEventListener("change", () => {
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    modelSelect.disabled = true;

    const selectedBrand = brandSelect.value;
    if (!selectedBrand) return;

    const brandObj = window.BRANDS.find(
      b => b.brand === selectedBrand
    );

    if (!brandObj) return;

    brandObj.models.forEach(model => {
      const option = document.createElement("option");
      option.value = model.id;
      option.textContent = model.name;
      modelSelect.appendChild(option);
    });

    modelSelect.disabled = false;
  });

  /* -------- MODEL → PREVIEW -------- */

modelSelect.addEventListener("change", () => {
  const modelId = modelSelect.value;
  if (!modelId) return;

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
    alert("Vehicle not found");
    return;
  }

  // Update preview
  document.querySelector(".model-name").textContent =
    `${foundBrand.brand} · ${foundModel.name}`;

  const previewList = document.querySelector(".preview-card ul");
  previewList.innerHTML = `
    <li>Category: ${foundModel.category || "-"}</li>
    <li>Engine: ${foundModel.engine || "-"}</li>
    <li>Introduced: ${foundModel.launchYear || "-"}</li>
  `;

  // 🔗 CONNECT KNOW MORE
  document.querySelector(".know-more-btn").href =
    `model.html?id=${foundModel.id}`;
});


    // UPDATE PREVIEW
    document.querySelector(".model-name").textContent =
      `${foundBrand.brand} · ${foundModel.name}`;

    const previewList = document.querySelector(".preview-card ul");
    previewList.innerHTML = `
      <li>Category: ${foundModel.category}</li>
      <li>Engine: ${foundModel.engine || "—"}</li>
      <li>Launch Year: ${foundModel.launchYear || "—"}</li>
    `;

    document.querySelector(".know-more-btn").href =
      `model.html?id=${foundModel.id}`;
  });

  loadBrands();
});
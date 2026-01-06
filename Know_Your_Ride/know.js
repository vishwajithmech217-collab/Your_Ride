document.addEventListener("DOMContentLoaded", () => {
  console.log("know.js loaded");

  const brandSelect = document.getElementById("brandSelect");
  const typeSelect = document.getElementById("typeSelect");
  const modelSelect = document.getElementById("modelSelect");
  const previewCard = document.getElementById("previewCard");

  /* ===== LOAD BRANDS ===== */
  brandSelect.innerHTML = `<option value="">Select brand</option>`;

  window.BRANDS.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.brand;
    opt.textContent = b.brand;
    brandSelect.appendChild(opt);
  });

  /* ===== BRAND → TYPE ===== */
  brandSelect.addEventListener("change", () => {
    typeSelect.innerHTML = `<option value="">Select type</option>`;
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    typeSelect.disabled = true;
    modelSelect.disabled = true;
    previewCard.classList.add("hidden");

    const brandObj = window.BRANDS.find(
      b => b.brand === brandSelect.value
    );
    if (!brandObj) return;

    const types = [...new Set(brandObj.models.map(m => m.type))];

    types.forEach(type => {
      const opt = document.createElement("option");
      opt.value = type;
      opt.textContent = type;
      typeSelect.appendChild(opt);
    });

    typeSelect.disabled = false;
  });

  /* ===== TYPE → MODEL ===== */
  typeSelect.addEventListener("change", () => {
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    modelSelect.disabled = true;
    previewCard.classList.add("hidden");

    const brandObj = window.BRANDS.find(
      b => b.brand === brandSelect.value
    );
    if (!brandObj) return;

    const models = brandObj.models.filter(
      m => m.type === typeSelect.value
    );

    models.forEach(model => {
      const opt = document.createElement("option");
      opt.value = model.id;
      opt.textContent = model.name;
      modelSelect.appendChild(opt);
    });

    modelSelect.disabled = false;
  });

  /* ===== MODEL → PREVIEW ===== */
  modelSelect.addEventListener("change", () => {
    const modelId = modelSelect.value;
    if (!modelId) return;

    let foundBrand = null;
    let foundModel = null;

    window.BRANDS.forEach(b => {
      b.models.forEach(m => {
        if (m.id === modelId) {
          foundBrand = b;
          foundModel = m;
        }
      });
    });

    if (!foundModel) return;

    document.querySelector(".model-name").textContent =
      `${foundBrand.brand} · ${foundModel.name}`;

    document.getElementById("previewCategory").textContent =
      foundModel.category;

    document.getElementById("previewEngine").textContent =
      foundModel.engine;

    document.getElementById("previewYear").textContent =
      foundModel.launchYear;

    document.querySelector(".know-more-btn").href =
      `model.html?id=${foundModel.id}`;

    previewCard.classList.remove("hidden");
  });

});
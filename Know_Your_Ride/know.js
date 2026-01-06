document.addEventListener("DOMContentLoaded", () => {
  console.log("know.js loaded");

  const brandSelect = document.getElementById("brandSelect");
  const typeSelect = document.getElementById("typeSelect");
  const modelSelect = document.getElementById("modelSelect");

  console.log("brandSelect:", brandSelect);
  console.log("BRANDS:", window.BRANDS);

  if (!brandSelect || !window.BRANDS) {
    console.error("Required elements or data missing");
    return;
  }
/* ---------- MODEL → PREVIEW ---------- */
modelSelect.addEventListener("change", () => {
  const selectedId = modelSelect.value;
  if (!selectedId) return;

  let foundBrand = null;
  let foundModel = null;

  window.BRANDS.forEach(brand => {
    brand.models.forEach(model => {
      if (model.id === selectedId) {
        foundBrand = brand;
        foundModel = model;
      }
    });
  });

  if (!foundModel) return;

  // 🔹 UPDATE PREVIEW TEXT
  document.querySelector(".model-name").textContent =
    `${foundBrand.brand} · ${foundModel.name}`;

  document.querySelector(".category").textContent =
    `Category: ${foundModel.category}`;

  document.querySelector(".engine").textContent =
    `Engine: ${foundModel.engine}`;

  document.querySelector(".launch").textContent =
    `Launched: ${foundModel.launchYear}`;

  // 🔹 KNOW MORE LINK
  const knowBtn = document.querySelector(".know-more-btn");
  if (knowBtn) {
    knowBtn.href = `model.html?id=${foundModel.id}`;
  }
});
  /* ---------- LOAD BRANDS ---------- */
  brandSelect.innerHTML = `<option value="">Select brand</option>`;
  window.BRANDS.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.brand;
    opt.textContent = b.brand;
    brandSelect.appendChild(opt);
  });

  /* ---------- BRAND → TYPE ---------- */
  brandSelect.addEventListener("change", () => {
    typeSelect.innerHTML = `<option value="">Select type</option>`;
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    typeSelect.disabled = true;
    modelSelect.disabled = true;

    const brandObj = window.BRANDS.find(
      b => b.brand === brandSelect.value
    );

    if (!brandObj) return;

    const types = [...new Set(brandObj.models.map(m => m.type))];

    types.forEach(t => {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      typeSelect.appendChild(opt);
    });

    typeSelect.disabled = false;
  });

  /* ---------- TYPE → MODEL ---------- */
  typeSelect.addEventListener("change", () => {
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    modelSelect.disabled = true;

    const brandObj = window.BRANDS.find(
      b => b.brand === brandSelect.value
    );
    if (!brandObj) return;

    const models = brandObj.models.filter(
      m => m.type === typeSelect.value
    );

    models.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m.id;
      opt.textContent = m.name;
      modelSelect.appendChild(opt);
    });

    modelSelect.disabled = false;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("know.js loaded");
  console.log("BRANDS:", window.BRANDS);

  const brandSelect = document.getElementById("brandSelect");
  const typeSelect = document.getElementById("typeSelect");
  const modelSelect = document.getElementById("modelSelect");

  const previewCard = document.getElementById("previewCard");
  const modelName = document.querySelector(".model-name");
  const previewCategory = document.getElementById("previewCategory");
  const previewEngine = document.getElementById("previewEngine");
  const previewYear = document.getElementById("previewYear");
  const knowMoreBtn = document.querySelector(".know-more-btn");

  /* ---------- LOAD BRANDS ---------- */
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
    previewCard.classList.add("hidden");

    const brand = window.BRANDS.find(
      b => b.brand === brandSelect.value
    );
    if (!brand) return;

    const types = [...new Set(brand.models.map(m => m.type))];

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
    previewCard.classList.add("hidden");

    const brand = window.BRANDS.find(
      b => b.brand === brandSelect.value
    );
    if (!brand) return;

    const models = brand.models.filter(
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

  /* ---------- MODEL → PREVIEW ---------- */
  modelSelect.addEventListener("change", () => {
    const brand = window.BRANDS.find(
      b => b.brand === brandSelect.value
    );
    if (!brand) return;

    const model = brand.models.find(
      m => m.id === modelSelect.value
    );
    if (!model) return;

    modelName.textContent = `${brand.brand} · ${model.name}`;
    previewCategory.textContent = model.category;
    previewEngine.textContent = model.engine;
    previewYear.textContent = model.launchYear;

    knowMoreBtn.href = `model.html?id=${model.id}`;

    previewCard.classList.remove("hidden");
  });
});
document.addEventListener("DOMContentLoaded", () => {

  if (!window.BRANDS || window.BRANDS.length === 0) {
    console.error("BRANDS data not loaded");
    return;
  }

  const brandSelect = document.getElementById("brandSelect");
  const typeSelect = document.getElementById("typeSelect");
  const modelSelect = document.getElementById("modelSelect");

  // LOAD BRANDS
  window.BRANDS.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.brand;
    opt.textContent = b.brand;
    brandSelect.appendChild(opt);
  });

  // BRAND → TYPE
  brandSelect.addEventListener("change", () => {
    typeSelect.innerHTML = `<option value="">Select type</option>`;
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    typeSelect.disabled = true;
    modelSelect.disabled = true;

    const brand = window.BRANDS.find(b => b.brand === brandSelect.value);
    if (!brand) return;

    [...new Set(brand.models.map(m => m.type))].forEach(type => {
      const opt = document.createElement("option");
      opt.value = type;
      opt.textContent = type;
      typeSelect.appendChild(opt);
    });

    typeSelect.disabled = false;
  });

  // TYPE → MODEL
  typeSelect.addEventListener("change", () => {
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    modelSelect.disabled = true;

    const brand = window.BRANDS.find(b => b.brand === brandSelect.value);
    if (!brand) return;

    brand.models
      .filter(m => m.type === typeSelect.value)
      .forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.id;
        opt.textContent = m.name;
        modelSelect.appendChild(opt);
      });

    modelSelect.disabled = false;
  });

});

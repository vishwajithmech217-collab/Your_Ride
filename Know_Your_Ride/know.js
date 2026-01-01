document.addEventListener("DOMContentLoaded", () => {

  console.log("know.js loaded");
  console.log("VEHICLES:", VEHICLES);

  // DOM ELEMENTS
  const brandSelect = document.getElementById("brandSelect");
  const typeSelect = document.getElementById("typeSelect");
  const modelSelect = document.getElementById("modelSelect");

  // -------- BRAND POPULATION --------
  function loadBrands() {
    const brands = [...new Set(VEHICLES.map(v => v.brand))];

    console.log("Brands found:", brands);

    brands.forEach(brand => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      brandSelect.appendChild(option);
    });
  }

  // -------- BRAND → TYPE --------
  brandSelect.addEventListener("change", () => {
    typeSelect.innerHTML = `<option value="">Select type</option>`;
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    typeSelect.disabled = false;
    modelSelect.disabled = true;

    const selectedBrand = brandSelect.value;

    const types = [
      ...new Set(
        VEHICLES
          .filter(v => v.brand === selectedBrand)
          .map(v => v.type)
      )
    ];

    types.forEach(type => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      typeSelect.appendChild(option);
    });
  });

  // -------- TYPE → MODEL --------
  typeSelect.addEventListener("change", () => {
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    modelSelect.disabled = false;

    const brand = brandSelect.value;
    const type = typeSelect.value;

    const models = VEHICLES.filter(
      v => v.brand === brand && v.type === type
    );

    models.forEach(v => {
      const option = document.createElement("option");
      option.value = v.id;
      option.textContent = v.model;
      modelSelect.appendChild(option);
    });
  });

  // INIT
  loadBrands();

});

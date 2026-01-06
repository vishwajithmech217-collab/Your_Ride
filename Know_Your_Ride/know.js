document.addEventListener("DOMContentLoaded", () => {
  console.log("know.js loaded");

  /* =====================
     DOM ELEMENTS
  ===================== */
  const brandSelect = document.getElementById("brandSelect");
  const typeSelect = document.getElementById("typeSelect");
  const modelSelect = document.getElementById("modelSelect");
  const previewCard = document.getElementById("previewCard");

  const timelineWrapper = document.getElementById("timelineWrapper");
  const timelineSlider = document.getElementById("timelineSlider");
  const timelinePoints = document.querySelectorAll(".timeline-point");

  if (!brandSelect || !typeSelect || !modelSelect || !window.BRANDS) {
    console.error("Missing required elements or BRANDS data");
    return;
  }

  /* =====================
     ERA → SLIDER POSITION
  ===================== */
  const ERA_POSITION = {
    classic: 10,
    modern: 40,
    bs6: 70,
    electric: 95
  };

  /* =====================
     LOAD BRANDS
  ===================== */
  brandSelect.innerHTML = `<option value="">Select brand</option>`;
  window.BRANDS.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.brand;
    opt.textContent = b.brand;
    brandSelect.appendChild(opt);
  });

  /* =====================
     BRAND → TYPE
  ===================== */
  brandSelect.addEventListener("change", () => {
    typeSelect.innerHTML = `<option value="">Select type</option>`;
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    typeSelect.disabled = true;
    modelSelect.disabled = true;
    previewCard.classList.add("hidden");

    if (timelineWrapper) {
      timelineWrapper.classList.remove("hidden");
      timelineSlider.disabled = false;
      timelineSlider.value = 50;
      timelinePoints.forEach(p => p.classList.remove("active"));
    }

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

  /* =====================
     TYPE → MODEL
  ===================== */
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

  /* =====================
     MODEL → PREVIEW + TIMELINE LOCK
  ===================== */
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

    /* PREVIEW UPDATE */
    document.querySelector(".model-name").textContent =
      `${foundBrand.brand} · ${foundModel.name}`;

    document.getElementById("previewCategory").textContent =
      foundModel.category || "—";

    document.getElementById("previewEngine").textContent =
      foundModel.engine || "—";

    document.getElementById("previewYear").textContent =
      foundModel.launchYear || "—";

    document.querySelector(".know-more-btn").href =
      `model.html?id=${foundModel.id}`;

    previewCard.classList.remove("hidden");

    /* TIMELINE LOCK */
    if (foundModel.era && ERA_POSITION[foundModel.era] && timelineWrapper) {
      timelineSlider.value = ERA_POSITION[foundModel.era];
      timelineSlider.disabled = true;

      timelinePoints.forEach(p =>
        p.classList.toggle(
          "active",
          p.dataset.era === foundModel.era
        )
      );
    }
  });
});

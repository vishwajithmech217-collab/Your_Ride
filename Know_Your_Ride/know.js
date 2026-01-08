document.addEventListener("DOMContentLoaded", () => {

  const brandSelect   = document.getElementById("brandSelect");
  const typeSelect    = document.getElementById("typeSelect");
  const modelSelect   = document.getElementById("modelSelect");
  const previewCard   = document.getElementById("previewCard");

  const timelineWrapper = document.getElementById("timelineWrapper");
  const timelineSlider  = document.getElementById("timelineSlider");
  const timelinePoints  = document.querySelectorAll(".timeline-point");

  const ERA_POSITION = {
    classic: 10,
    modern: 40,
    bs6: 70,
    electric: 95
  };

  /* ======================
     INITIAL STATE
  ====================== */
  timelineWrapper.classList.add("hidden");
  typeSelect.disabled = true;
  modelSelect.disabled = true;

  /* ======================
     LOAD BRANDS
  ====================== */
  brandSelect.innerHTML = `<option value="">Select brand</option>`;

  window.BRANDS.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.brand;
    opt.textContent = b.brand;
    brandSelect.appendChild(opt);
  });

  /* ======================
     BRAND → TYPE
  ====================== */
  brandSelect.addEventListener("change", () => {

    typeSelect.innerHTML = `<option value="">Select type</option>`;
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    typeSelect.disabled = true;
    modelSelect.disabled = true;
    previewCard.classList.add("hidden");

    if (!brandSelect.value) {
      timelineWrapper.classList.add("hidden");
      return;
    }

    timelineWrapper.classList.remove("hidden");
    timelineSlider.disabled = false;
    timelineSlider.value = 50;
    timelinePoints.forEach(p => p.classList.remove("active"));

    const brandObj = window.BRANDS.find(
      b => b.brand === brandSelect.value
    );
    if (!brandObj) return;

    [...new Set(brandObj.models.map(m => m.type))].forEach(type => {
      const opt = document.createElement("option");
      opt.value = type;
      opt.textContent = type;
      typeSelect.appendChild(opt);
    });

    typeSelect.disabled = false;
  });

  /* ======================
     TYPE → MODEL
  ====================== */
  typeSelect.addEventListener("change", () => {

    modelSelect.innerHTML = `<option value="">Select model</option>`;
    modelSelect.disabled = true;
    previewCard.classList.add("hidden");

    const brandObj = window.BRANDS.find(
      b => b.brand === brandSelect.value
    );
    if (!brandObj) return;

    brandObj.models
      .filter(m => m.type === typeSelect.value)
      .forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.id;
        opt.textContent = m.name;
        modelSelect.appendChild(opt);
      });

    modelSelect.disabled = false;
  });

  /* ======================
     MODEL → PREVIEW + TIMELINE LOCK
  ====================== */
  modelSelect.addEventListener("change", () => {

    const brandObj = window.BRANDS.find(
      b => b.brand === brandSelect.value
    );
    if (!brandObj) return;

    const modelObj = brandObj.models.find(
      m => m.id === modelSelect.value
    );
    if (!modelObj) return;

    if (modelObj.era && ERA_POSITION[modelObj.era] !== undefined) {
      timelineSlider.value = ERA_POSITION[modelObj.era];
      timelineSlider.disabled = true;

      timelinePoints.forEach(p =>
        p.classList.toggle(
          "active",
          p.dataset.era === modelObj.era
        )
      );
    }

    document.querySelector(".model-name").textContent =
      `${brandObj.brand} · ${modelObj.name}`;

    document.getElementById("previewCategory").textContent =
      modelObj.category || "—";

    document.getElementById("previewEngine").textContent =
      modelObj.engine || "—";

    document.getElementById("previewYear").textContent =
      modelObj.launchYear || "—";

    document.querySelector(".know-more-btn").href =
      `model.html?id=${modelObj.id}`;

    previewCard.classList.remove("hidden");
  });

});
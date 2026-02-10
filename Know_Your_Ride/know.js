import { BIKES } from "../../data/selectYourRide/bikes";

document.addEventListener("DOMContentLoaded", () => {

  const brandSelect = document.getElementById("brandSelect");
  const typeSelect = document.getElementById("typeSelect");
  const modelSelect = document.getElementById("modelSelect");

  const timelineWrapper = document.getElementById("timelineWrapper");
  const timelineSlider = document.getElementById("timelineSlider");

  const previewCard = document.getElementById("previewCard");

  const ERA_POSITION = {
    classic: 10,
    modern: 40,
    bs6: 70,
    electric: 95
  };

  /* LOAD BRANDS */
  window.BRANDS.forEach(b => {
    const o = document.createElement("option");
    o.value = b.brand;
    o.textContent = b.brand;
    brandSelect.appendChild(o);
  });

  /* BRAND → TYPE */
  brandSelect.addEventListener("change", () => {
    typeSelect.innerHTML = `<option value="">Select type</option>`;
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    typeSelect.disabled = true;
    modelSelect.disabled = true;
    previewCard.classList.add("hidden");

    if (!brandSelect.value) return;

    timelineWrapper.classList.remove("hidden");
    timelineSlider.disabled = false;
    timelineSlider.value = 50;

    const brand = BRANDS.find(b => b.brand === brandSelect.value);
    if (!brand) return;

    [...new Set(brand.models.map(m => m.type))].forEach(t => {
      const o = document.createElement("option");
      o.value = t;
      o.textContent = t;
      typeSelect.appendChild(o);
    });

    typeSelect.disabled = false;
  });

  /* TYPE → MODEL */
  typeSelect.addEventListener("change", () => {
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    modelSelect.disabled = true;
    previewCard.classList.add("hidden");

    const brand = BRANDS.find(b => b.brand === brandSelect.value);
    if (!brand) return;

    brand.models
      .filter(m => m.type === typeSelect.value)
      .forEach(m => {
        const o = document.createElement("option");
        o.value = m.id;
        o.textContent = m.name;
        modelSelect.appendChild(o);
      });

    modelSelect.disabled = false;
  });

  /* MODEL → PREVIEW + TIMELINE LOCK */
  modelSelect.addEventListener("change", () => {
    const brand = BRANDS.find(b => b.brand === brandSelect.value);
    if (!brand) return;

    const model = brand.models.find(m => m.id === modelSelect.value);
    if (!model) return;

    timelineSlider.value = ERA_POSITION[model.era];
    timelineSlider.disabled = true;

    document.querySelector(".model-name").textContent =
      `${brand.brand} · ${model.name}`;

    document.getElementById("previewCategory").textContent = model.category;
    document.getElementById("previewEngine").textContent = model.engine;
    document.getElementById("previewYear").textContent = model.launchYear;

    document.getElementById("knowMoreBtn").href =
      `model.html?id=${model.id}`;

    previewCard.classList.remove("hidden");
  });

});
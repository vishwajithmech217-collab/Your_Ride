document.addEventListener("DOMContentLoaded", () => {
  console.log("know.js loaded");

  if (!window.BRANDS) {
    alert("Brand data not loaded");
    return;
  }

  const brandSelect = document.getElementById("brandSelect");
  const modelSelect = document.getElementById("modelSelect");
  const knowMoreBtn = document.getElementById("knowMoreBtn");

  // Load brands
  window.BRANDS.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.brand;
    opt.textContent = b.brand;
    brandSelect.appendChild(opt);
  });

  // Brand → Models
  brandSelect.addEventListener("change", () => {
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    modelSelect.disabled = true;
    knowMoreBtn.style.display = "none";

    const brand = window.BRANDS.find(
      b => b.brand === brandSelect.value
    );

    if (!brand) return;

    brand.models.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m.id;
      opt.textContent = m.name;
      modelSelect.appendChild(opt);
    });

    modelSelect.disabled = false;
  });

  // Model → Know more
  modelSelect.addEventListener("change", () => {
    if (!modelSelect.value) return;

    knowMoreBtn.href = `model.html?id=${modelSelect.value}`;
    knowMoreBtn.style.display = "inline-block";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("know.js loaded");
  console.log("BRANDS =", window.BRANDS);

  if (!window.BRANDS || window.BRANDS.length === 0) {
    alert("BRANDS DATA NOT LOADED");
    return;
  }

  const brandSelect = document.getElementById("brandSelect");
  const modelSelect = document.getElementById("modelSelect");
  const knowMoreBtn = document.getElementById("knowMoreBtn");

  window.BRANDS.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b.brand;
    opt.textContent = b.brand;
    brandSelect.appendChild(opt);
  });

  brandSelect.addEventListener("change", () => {
    modelSelect.innerHTML = `<option value="">Select model</option>`;
    modelSelect.disabled = false;

    const brand = window.BRANDS.find(b => b.brand === brandSelect.value);
    if (!brand) return;

    brand.models.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m.id;
      opt.textContent = m.name;
      modelSelect.appendChild(opt);
    });
  });

  modelSelect.addEventListener("change", () => {
    knowMoreBtn.href = `model.html?id=${modelSelect.value}`;
    knowMoreBtn.style.display = "inline-block";
  });
});

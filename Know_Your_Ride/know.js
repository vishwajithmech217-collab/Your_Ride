document.addEventListener("DOMContentLoaded", () => {
  console.log("know.js running");

  console.log("VEHICLES:", typeof VEHICLES, VEHICLES?.length);

  const brandSelect = document.getElementById("brandSelect");

  const brands = [...new Set(VEHICLES.map(v => v.brand))];

  brands.forEach(brand => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
  });
});
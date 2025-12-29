console.log("know.js loaded");

const select = document.getElementById("brandSelect");
const result = document.getElementById("brandResult");
const goBtn = document.getElementById("goToSelect");

/* Populate dropdown */
BRANDS.forEach(b => {
  const opt = document.createElement("option");
  opt.value = b.id;
  opt.textContent = b.name;
  select.appendChild(opt);
});

/* On brand selection */
select.addEventListener("change", () => {
  const brandId = select.value;
  if (!brandId) return;

  const brand = BRANDS.find(b => b.id === brandId);

  result.innerHTML = `
    <div class="card">
      <h2>${brand.name}</h2>
      <p><b>Founded:</b> ${brand.founded}</p>
      <p><b>Country:</b> ${brand.country}</p>
      <p>${brand.description}</p>

      <h3>Famous Models</h3>
      <ul>
        ${brand.famousModels.map(m => `<li>${m}</li>`).join("")}
      </ul>
    </div>
  `;

  goBtn.classList.remove("hidden");

  /* store brand for Select page */
  localStorage.setItem("selectedBrand", brand.id);
});

/* Deep link to Select Your Ride */
goBtn.addEventListener("click", () => {
  window.location.href = "../Select_Your_Ride_V5/select.html";
});
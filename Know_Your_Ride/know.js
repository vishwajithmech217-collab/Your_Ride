console.log("know.js loaded");

const select = document.getElementById("brandSelect");
const result = document.getElementById("brandResult");
const goBtn = document.getElementById("goToSelect");

/* Populate dropdown */
BRANDS.forEach(b => {
  const opt = document.createElement("option");
  opt.value = b.name;
  opt.textContent = b.name;
  select.appendChild(opt);
});

/* Read URL params (Select → Know) */
const params = new URLSearchParams(window.location.search);
const brandParam = params.get("brand");

/* Auto-load if coming from Select */
if (brandParam) {
  select.value = brandParam;
  renderBrand(brandParam);
}

/* Dropdown change */
select.addEventListener("change", () => {
  const brandName = select.value;
  if (!brandName) return;
  renderBrand(brandName);
});

function renderBrand(name) {
  const brand = BRANDS.find(
    b => b.name.toLowerCase() === name.toLowerCase()
  );

  if (!brand) return;

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

      <h3>Milestones</h3>
      <div class="timeline">
        ${brand.milestones.map(m => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">${m.year}</div>
            <div class="timeline-text">${m.text}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  goBtn.classList.remove("hidden");

  /* Store brand for Select page */
  localStorage.setItem("selectedBrand", brand.name);
}

/* Know → Select */
goBtn.addEventListener("click", () => {
  window.location.href = "../Select_Your_Ride_V5/select.html";
});
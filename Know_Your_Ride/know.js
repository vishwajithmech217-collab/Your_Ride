console.log("know.js loaded");

const select = document.getElementById("brandSelect");
const result = document.getElementById("brandResult");
const timeline = document.getElementById("timeline");
const goBtn = document.getElementById("goToSelect");

/* Populate dropdown */
BRANDS.forEach(b => {
  const opt = document.createElement("option");
  opt.value = b.id;
  opt.textContent = b.name;
  select.appendChild(opt);
});

/* On selection */
select.addEventListener("change", () => {
  const brand = BRANDS.find(b => b.id === select.value);
  if (!brand) return;

  result.innerHTML = `
    <div class="card">
      <h2>${brand.name}</h2>
      <p><b>Founded:</b> ${brand.founded}</p>
      <p><b>Country:</b> ${brand.country}</p>
      <p>${brand.description}</p>
      <h3>Famous Models</h3>
      <ul>${brand.famousModels.map(m => `<li>${m}</li>`).join("")}</ul>
    </div>
  `;

  timeline.innerHTML = brand.milestones.map(m => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-year">${m.year}</div>
      <div class="timeline-text">${m.text}</div>
    </div>
  `).join("");

  localStorage.setItem("selectedBrand", brand.id);
  goBtn.classList.remove("hidden");
});

goBtn.onclick = () => {
  window.location.href = "../Select_Your_Ride_V5/select.html";
};
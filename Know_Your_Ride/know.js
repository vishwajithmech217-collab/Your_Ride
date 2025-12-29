const brandSelect = document.getElementById("brandSelect");
const brandInfo = document.getElementById("brandInfo");
const timeline = document.getElementById("timeline");

brandSelect.addEventListener("change", () => {
  const brand = BRANDS.find(b => b.name === brandSelect.value);
  if (!brand) return;

  // Brand info
  brandInfo.innerHTML = `
    <h3>${brand.name}</h3>
    <p><b>Founded:</b> ${brand.founded}</p>
    <p><b>Country:</b> ${brand.country}</p>
    <p><b>Philosophy:</b> ${brand.philosophy}</p>
  `;

  // Timeline
  timeline.innerHTML = "";
  brand.milestones.forEach(m => {
    const div = document.createElement("div");
    div.className = "timeline-item";
    div.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-year">${m.year}</div>
      <div class="timeline-text">${m.text}</div>
    `;
    timeline.appendChild(div);
  });
});

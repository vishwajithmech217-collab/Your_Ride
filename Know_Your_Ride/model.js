document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) return;

  const vehicle = VEHICLES.find(v => v.id === id);
  if (!vehicle) return;

  // Title
  document.getElementById("modelTitle").textContent =
    `${vehicle.brand} ${vehicle.model}`;

  document.getElementById("modelSubtitle").textContent =
    `${vehicle.type.toUpperCase()} · ${vehicle.segment.replace("_", " ")}`;

  // Overview
  document.getElementById("modelDetails").innerHTML = `
    <li>Category: ${vehicle.segment.replace("_", " ")}</li>
    <li>Seat height: ${vehicle.ergonomics.seatHeight} mm</li>
    <li>Kerb weight: ${vehicle.physical.kerbWeight} kg</li>
    <li>Skill level: ${vehicle.skillLevel}</li>
  `;

  // Usage
  document.getElementById("usageDetails").innerHTML = `
    <li>City: ${vehicle.usage.city}/100</li>
    <li>Highway: ${vehicle.usage.highway}/100</li>
  `;

});

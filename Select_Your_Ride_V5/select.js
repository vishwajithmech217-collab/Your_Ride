console.log("select.js loaded");

/*
  BASIC SELECT YOUR RIDE LOGIC
  ----------------------------
  Inputs used:
  - height (cm)
  - weight (kg)
  - vehicle type
  - usage slider
  - frequency slider
*/

function recommend() {
  // Get inputs
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const typeSelect = document.getElementById("type");
  const usageInput = document.getElementById("usage");
  const frequencyInput = document.getElementById("frequency");
  const results = document.getElementById("results");

  // Clear previous results
  results.innerHTML = "";

  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);
  const type = typeSelect.value;
  const usage = Number(usageInput.value);
  const frequency = Number(frequencyInput.value);

  // Validation
  if (!height || height < 130 || height > 210) {
    alert("Please enter a valid height between 130 and 210 cm");
    return;
  }

  if (!weight || weight < 30 || weight > 200) {
    alert("Please enter a valid weight between 30 and 200 kg");
    return;
  }

  // Basic reasoning (NOT scoring)
  let note = "";
  let status = "Recommended";

  if (type === "bike" && height < 160) {
    status = "Caution";
    note = "Shorter riders may find some bikes uncomfortable.";
  }

  if (type === "bike" && weight < 50) {
    status = "Caution";
    note = "Very lightweight riders should avoid heavy bikes.";
  }

  if (type === "car" && usage < 30) {
    note = "Mostly city usage – compact cars are better.";
  }

  if (type === "suv" && usage < 40) {
    status = "Caution";
    note = "SUVs are not ideal for heavy city usage.";
  }

  // Create result card
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${type.toUpperCase()} – ${status}</h3>
    <p><b>Height:</b> ${height} cm</p>
    <p><b>Weight:</b> ${weight} kg</p>
    <p><b>Usage:</b> ${usage < 50 ? "City" : "Highway"}</p>
    <p><b>Frequency:</b> ${frequency < 50 ? "Daily" : "Occasional"}</p>
    ${note ? `<p style="color:#facc15">⚠ ${note}</p>` : ""}
    <p style="opacity:0.8;margin-top:10px">
      For advanced matching & exact models → <b>Install our app</b>
    </p>
  `;

  results.appendChild(card);
}

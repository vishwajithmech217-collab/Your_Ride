console.log("select.js loaded");

const vehicles = VEHICLES;

function recommend() {
  const height = +document.getElementById("height").value;
  const weight = +document.getElementById("weight").value;
  const type = document.getElementById("type").value;

  const results = document.getElementById("results");
  results.innerHTML = "";

  // ----- VALIDATION -----
  if (!height || height < 130 || height > 210) {
    alert("Please enter a valid height (130–210 cm)");
    return;
  }

  if (!weight || weight < 30 || weight > 200) {
    alert("Please enter a valid weight (30–200 kg)");
    return;
  }

  const list = vehicles.filter(v => v.type === type);

  list.forEach(vehicle => {
    const reasons = [];
    let label = "Recommended";
    let labelClass = "good";

    // ---- Seat height check ----
    const legHeight = Math.round(height * 0.46);
    const diff = Math.abs(vehicle.ergonomics.seatHeight - legHeight);

    if (diff > 60) {
      label = "Not Ideal";
      labelClass = "bad";
      reasons.push("Seat height is too tall for your height");
    } else if (diff > 30) {
      label = "Caution";
      labelClass = "warn";
      reasons.push("Seat height may feel slightly tall");
    } else {
      reasons.push("Seat height suits your height");
    }

    // ---- Weight safety check ----
    if (weight < 50 && vehicle.physical.kerbWeight > 180) {
      label = "Caution";
      labelClass = "warn";
      reasons.push("Heavy vehicle for your body weight");
    }

    if (weight > 90 && vehicle.physical.kerbWeight < 120) {
      label = "Caution";
      labelClass = "warn";
      reasons.push("Light vehicle may feel unstable at speed");
    }

    // ---- Card UI ----
    const card = document.createElement("div");
    card.className = `card ${labelClass}`;

    card.innerHTML = `
      <h3>${vehicle.brand} ${vehicle.model}</h3>
      <span class="label ${labelClass}">${label}</span>
      <ul>
        ${reasons.map(r => `<li>${r}</li>`).join("")}
      </ul>
      <button onclick="knowRide('${vehicle.brand}', '${vehicle.model}')">
        Know this Ride →
      </button>
    `;

    results.appendChild(card);
  });
}

// ---- KNOW RIDE LINK ----
function knowRide(brand, model) {
  const params = new URLSearchParams({ brand, model });
  window.location.href =
    "../Know_Your_Ride/know.html?" + params.toString();
}

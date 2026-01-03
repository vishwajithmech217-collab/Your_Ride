console.log("select.js loaded ✅");

document.getElementById("recommendBtn").addEventListener("click", recommend);

function recommend() {
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const type = document.getElementById("type").value;
  const box = document.getElementById("resultBox");

  if (!height || height < 130 || height > 210) {
    box.innerHTML = "❌ Please enter a valid height (130–210 cm)";
    return;
  }

  if (!weight || weight < 30 || weight > 200) {
    box.innerHTML = "❌ Please enter a valid weight (30–200 kg)";
    return;
  }

  if (!type) {
    box.innerHTML = "❌ Please select a vehicle type";
    return;
  }

  let status = "✅ Recommended";
  let reason = "Good match for your body profile.";

  // 🚲 BIKE LOGIC
  if (type === "bike") {
    if (height < 150) {
      status = "🔴 Avoid";
      reason = "Most bikes may feel tall for your height.";
    } else if (weight < 50) {
      status = "🟡 Caution";
      reason = "Heavy bikes may feel unstable.";
    }
  }

  // 🛵 SCOOTER LOGIC
  if (type === "scooter") {
    if (height < 140) {
      status = "🟡 Caution";
      reason = "Seat height may be uncomfortable.";
    }
  }

  // 🚗 CAR LOGIC
  if (type === "car") {
    status = "✅ Recommended";
    reason = "Cars are suitable for most height and weight ranges.";
  }

  // 🚙 SUV LOGIC
  if (type === "suv") {
    if (height < 155) {
      status = "🟡 Caution";
      reason = "SUV height may feel difficult in city usage.";
    }
  }

  box.innerHTML = `<h3>${status}</h3><p>${reason}</p>`;
}


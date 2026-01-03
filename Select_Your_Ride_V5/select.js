alert("select.js loaded");

function recommend() {
  const height = +document.getElementById("height").value;
  const weight = +document.getElementById("weight").value;
  const resultBox = document.getElementById("resultBox");

  resultBox.classList.remove("hidden");

  // Validation
  if (!height || height < 130 || height > 210) {
    resultBox.innerHTML = "❌ Please enter a valid height (130–210 cm)";
    return;
  }

  if (!weight || weight < 30 || weight > 200) {
    resultBox.innerHTML = "❌ Please enter a valid weight (30–200 kg)";
    return;
  }

  // Decision logic
  let status = "✅ Recommended";
  let reason = "Good balance between height and weight.";

  if (height < 150) {
    status = "🔴 Avoid";
    reason = "Tall vehicles may be unsafe for your height.";
  } else if (weight < 50) {
    status = "🟡 Caution";
    reason = "Heavy vehicles may feel unstable for your weight.";
  }

  resultBox.innerHTML = `
    <h3>${status}</h3>
    <p>${reason}</p>
  `;
}


  alert(
    "Inputs received:\n" +
    "Height: " + height + " cm\n" +
    "Weight: " + weight + " kg"
  );
}


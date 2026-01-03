console.log("select.js loaded ✅");

document.getElementById("recommendBtn").addEventListener("click", recommend);

function recommend() {
  console.log("recommend() called ✅");

  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const box = document.getElementById("resultBox");

  if (!height || height < 130 || height > 210) {
    box.innerHTML = "❌ Please enter a valid height (130–210 cm)";
    return;
  }

  if (!weight || weight < 30 || weight > 200) {
    box.innerHTML = "❌ Please enter a valid weight (30–200 kg)";
    return;
  }

  let status = "✅ Recommended";
  let reason = "Your height and weight are well balanced.";

  if (height < 150) {
    status = "🔴 Avoid";
    reason = "Tall vehicles may be unsafe for your height.";
  } else if (weight < 50) {
    status = "🟡 Caution";
    reason = "Heavy vehicles may feel unstable for your weight.";
  }

  box.innerHTML = `<h3>${status}</h3><p>${reason}</p>`;
}

alert("select.js loaded");

function recommend() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (!height || height < 130 || height > 210) {
    alert("Please enter a valid height (130–210 cm)");
    return;
  }

  if (!weight || weight < 30 || weight > 200) {
    alert("Please enter a valid weight (30–200 kg)");
    return;
  }

  alert(
    "Inputs received:\n" +
    "Height: " + height + " cm\n" +
    "Weight: " + weight + " kg"
  );
}


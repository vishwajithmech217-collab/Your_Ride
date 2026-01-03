console.log("Basic select.js loaded");

/* BASIC VEHICLE DATA */
const VEHICLES = [
  {
    brand: "Yamaha",
    model: "MT-15",
    type: "bike",
    seatHeight: 810,
    weight: 141
  },
  {
    brand: "Royal Enfield",
    model: "Classic 350",
    type: "bike",
    seatHeight: 805,
    weight: 195
  },
  {
    brand: "Honda",
    model: "Activa",
    type: "scooter",
    seatHeight: 765,
    weight: 109
  }
];

function recommend() {
  const height = +document.getElementById("height").value;
  const weight = +document.getElementById("weight").value;
  const type = document.getElementById("type").value;

  const results = document.getElementById("results");
  results.innerHTML = "";

  if (!height || height < 130 || height > 210) {
    alert("Enter valid height (130–210 cm)");
    return;
  }

  if (!weight || weight < 30 || weight > 200) {
    alert("Enter valid weight (30–200 kg)");
    return;
  }

  const matches = VEHICLES.filter(v => v.type === type);

  matches.forEach(v => {
    const legHeight = Math.round(height * 0.46);
    const diff = Math.abs(v.seatHeight - legHeight);

    let reason = diff < 40
      ? "Seat height suitable for your height"
      : "Seat height may feel tall";

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <b>${v.brand} ${v.model}</b><br>
      ${reason}
    `;
    results.appendChild(card);
  });
}

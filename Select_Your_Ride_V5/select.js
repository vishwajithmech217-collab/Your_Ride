console.log("select.js loaded ✅");

const VEHICLES = [
  // BIKES
  {
    brand: "Yamaha",
    model: "MT-15",
    type: "bike",
    seatHeight: 810,
    kerbWeight: 141
  },
  {
    brand: "Royal Enfield",
    model: "Classic 350",
    type: "bike",
    seatHeight: 805,
    kerbWeight: 195
  },

  // SCOOTERS
  {
    brand: "Honda",
    model: "Activa 6G",
    type: "scooter",
    seatHeight: 765,
    kerbWeight: 106
  },

  // CARS
  {
    brand: "Maruti",
    model: "Swift",
    type: "car",
    seatHeight: 1650,
    kerbWeight: 875
  },

  // SUV
  {
    brand: "Tata",
    model: "Nexon",
    type: "suv",
    seatHeight: 1700,
    kerbWeight: 1200
  }
];

document.getElementById("recommendBtn").addEventListener("click", recommend);

function recommend() {
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const type = document.getElementById("type").value;
  const box = document.getElementById("resultBox");

  box.innerHTML = "";

  if (!height || height < 130 || height > 210) {
    box.innerHTML = "❌ Enter valid height (130–210 cm)";
    return;
  }

  if (!weight || weight < 30 || weight > 200) {
    box.innerHTML = "❌ Enter valid weight (30–200 kg)";
    return;
  }

  if (!type) {
    box.innerHTML = "❌ Select vehicle type";
    return;
  }

  const filtered = VEHICLES.filter(v => v.type === type);

  if (filtered.length === 0) {
    box.innerHTML = "❌ No vehicles found";
    return;
  }

  filtered.forEach(v => {
    let status = "✅ Recommended";
    let reason = "Good overall match.";

    // Seat height logic
    const legHeight = Math.round(height * 0.46);
const seatHeightCm = v.seatHeight > 200 ? v.seatHeight / 10 : v.seatHeight;
const diff = Math.abs(seatHeightCm - legHeight);

if (diff > 25) {
  status = "🔴 Avoid";
  reason = "Seat height may feel uncomfortable.";
} else if (diff > 12) {
  status = "🟡 Caution";
  reason = "Seat height may feel slightly tall.";
} else {
  status = "✅ Recommended";
  reason = "Seat height suits your body well.";
}


    // Weight safety logic
    if (weight < 50 && v.kerbWeight > 180) {
      status = "🟡 Caution";
      reason = "Heavy vehicle may feel unstable.";
    }

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${v.brand} ${v.model}</h3>
      <p><b>${status}</b></p>
      <p>${reason}</p>
    `;

    box.appendChild(card);
  });
}

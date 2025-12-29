console.log("select.js loaded");

/* VEHICLE DATA */
const vehicles = [
  {
    name: "Yamaha MT-15",
    type: "bike",
    seatHeight: 810,
    posture: "sport",
    cityBias: 70,
    highwayBias: 80
  },
  {
    name: "Royal Enfield Classic 350",
    type: "bike",
    seatHeight: 805,
    posture: "upright",
    cityBias: 60,
    highwayBias: 85
  },
  {
    name: "Honda Activa",
    type: "scooter",
    seatHeight: 765,
    posture: "relaxed",
    cityBias: 90,
    highwayBias: 40
  },
  {
    name: "Hyundai i20",
    type: "car",
    seatHeight: 1650,
    posture: "seated",
    cityBias: 75,
    highwayBias: 80
  }
];

function calculateScore(vehicle, user) {
  let score = 0;

  // Height vs Seat Height logic
  const heightDiff = Math.abs(user.height - vehicle.seatHeight);
  score += Math.max(0, 40 - heightDiff / 5);

  // Usage logic
  const usageScore =
    user.usage < 50 ? vehicle.cityBias : vehicle.highwayBias;
  score += usageScore * 0.4;

  // Frequency logic
  score += user.frequency * 0.2;

  return Math.round(Math.min(score, 100));
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("detailModal").classList.add("hidden");
});

document.getElementById("advancedBtn").addEventListener("click", () => {
  document.getElementById("advancedBox").classList.toggle("hidden");
});

document.getElementById("recommendBtn").addEventListener("click", recommend);

function recommend() {
  const type = document.getElementById("type").value;
  const results = document.getElementById("results");
  results.innerHTML = "";

  const list = vehicles.filter(v => v.type === type);

  list.forEach(v => {
    const score = Math.round(
      (v.comfort + v.control + v.posture + v.usage) / 4
    );

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <b>${v.name}</b><br>
      Score: ${score}/100<br><br>
      <button onclick='showDetails(${JSON.stringify(v)}, ${score})'>
        Details
      </button>
    `;
    results.appendChild(card);
  });
}

function showDetails(v, score) {
  document.getElementById("dName").innerText = v.name;
  document.getElementById("dScore").innerText =
    "Overall Score: " + score + "/100";

  document.getElementById("barComfort").style.width = v.comfort + "%";
  document.getElementById("barControl").style.width = v.control + "%";
  document.getElementById("barPosture").style.width = v.posture + "%";
  document.getElementById("barUsage").style.width = v.usage + "%";

  document.getElementById("whyFit").innerHTML = `
    <li>Posture suits your height</li>
    <li>Usage matches your riding style</li>
  `;

  document.getElementById("whyNot").innerHTML = `
    <li>Seat height may need adjustment</li>
  `;

  document.getElementById("detailModal").classList.remove("hidden");
}

function closeDetail() {
  document.getElementById("detailModal").classList.add("hidden");
}

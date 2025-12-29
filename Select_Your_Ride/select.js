console.log("select.js loaded");

/* VEHICLE DATA */
const vehicles = [
  {
    name: "Yamaha MT-15",
    type: "bike",
    comfort: 80,
    control: 90,
    posture: 75,
    usage: 70
  },
  {
    name: "Royal Enfield Classic 350",
    type: "bike",
    comfort: 85,
    control: 70,
    posture: 90,
    usage: 60
  },
  {
    name: "Honda Activa",
    type: "scooter",
    comfort: 80,
    control: 75,
    posture: 85,
    usage: 90
  },
  {
    name: "Hyundai i20",
    type: "car",
    comfort: 90,
    control: 85,
    posture: 95,
    usage: 65
  }
];

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
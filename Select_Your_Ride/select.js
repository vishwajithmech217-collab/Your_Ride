console.log("select.js loaded");

/* VEHICLE DATA */
const vehicles = [
  { name: "Yamaha MT-15", type: "bike", comfort: 80, control: 90, posture: 75, usage: 70 },
  { name: "Royal Enfield Classic 350", type: "bike", comfort: 85, control: 70, posture: 90, usage: 60 },
  { name: "Honda Activa", type: "scooter", comfort: 80, control: 75, posture: 85, usage: 90 },
  { name: "Hyundai i20", type: "car", comfort: 90, control: 85, posture: 95, usage: 65 }
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("detailModal").classList.add("hidden");
});

const advancedBtn = document.getElementById("advancedBtn");
const recommendBtn = document.getElementById("recommendBtn");

advancedBtn.addEventListener("click", () => {
  document.getElementById("advancedBox").classList.toggle("hidden");
});

recommendBtn.addEventListener("click", recommend);

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
      <button onclick='showDetail(${JSON.stringify(v)}, ${score})'>
        Details
      </button>
    `;
    results.appendChild(card);
  });
}

function openDetails(id) {
  currentDetail = vehicles[id];
  showDetails(currentDetail);
}

function showDetail(v,score) {
  document.getElementById("dName").innerText = data.name;
  document.getElementById("dScore").innerText =
    "Overall Score: " + data.score + "/100";

  // Bars
  document.getElementById("barComfort").style.width = data.comfort + "%";
  document.getElementById("barControl").style.width = data.control + "%";
  document.getElementById("barPosture").style.width = data.posture + "%";
  document.getElementById("barUsage").style.width = data.usage + "%";

  // Lists
  fillList("whyFit", data.whyFit);
  fillList("whyNot", data.whyNot);

  document.getElementById("detailModal").classList.remove("hidden");
}

function fillList(id, items) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  items.forEach(text => {
    const li = document.createElement("li");
    li.innerText = text;
    ul.appendChild(li);
  });
}

let compareList = [];

function selectCompare() {
  if (compareList.length >= 2) {
    alert("Only 2 vehicles can be compared");
    return;
  }

  compareList.push(currentDetail);
  closeDetail();

  if (compareList.length === 2) {
    showCompare();
  }
}

function showCompare() {
  const grid = document.getElementById("compareGrid");
  grid.innerHTML = "";

  compareList.forEach(v => {
    const div = document.createElement("div");
    div.className = "compare-card";
    div.innerHTML = `
      <h3>${v.name}</h3>
      <p>Score: ${v.score}/100</p>
      <p>Comfort: ${v.comfort}</p>
      <p>Control: ${v.control}</p>
      <p>Posture: ${v.posture}</p>
      <p>Usage: ${v.usage}</p>
    `;
    grid.appendChild(div);
  });

  document.getElementById("compareModal").classList.remove("hidden");
}

function closeCompare() {
  compareList = [];
  document.getElementById("compareModal").classList.add("hidden");
}

function closeDetail() {
  document.getElementById("detailModal").classList.add("hidden");
}
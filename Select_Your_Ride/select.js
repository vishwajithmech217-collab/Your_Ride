console.log("select.js loaded");

/* VEHICLE DATA */
const vehicles = [
  { name: "Yamaha MT-15", type: "bike", comfort: 80, control: 90, posture: 75, usage: 70 },
  { name: "Royal Enfield Classic 350", type: "bike", comfort: 85, control: 70, posture: 90, usage: 60 },
  { name: "Honda Activa", type: "scooter", comfort: 80, control: 75, posture: 85, usage: 90 },
  { name: "Hyundai i20", type: "car", comfort: 90, control: 85, posture: 95, usage: 65 }
];

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
    const score = calcScore(v);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <b>${v.name}</b><br>
      Score: ${score}/100<br><br>
      <button onclick='showDetails(${JSON.stringify(v)})'>Details</button>
    `;
    results.appendChild(card);
  });
}

function calcScore(v) {
  return Math.round((v.comfort + v.control + v.posture + v.usage) / 4);
}

function showDetails(v) {
  const score = calcScore(v);

  document.getElementById("dName").innerText = v.name;
  document.getElementById("dScore").innerText = `Overall Score: ${score}/100`;

  document.getElementById("barComfort").style.width = v.comfort + "%";
  document.getElementById("barControl").style.width = v.control + "%";
  document.getElementById("barPosture").style.width = v.posture + "%";
  document.getElementById("barUsage").style.width = v.usage + "%";

  fillList("whyFit", [
    v.comfort > 75 ? "Good comfort for daily rides" : "Comfort may feel stiff",
    v.posture > 80 ? "Healthy riding posture" : "Posture may feel aggressive",
    v.usage > 70 ? "Great for your usage pattern" : "Better suited for limited use"
  ]);

  fillList("whyNot", [
    v.control < 75 ? "Handling may need experience" : "—",
    v.usage < 60 ? "Not ideal for heavy daily usage" : "—"
  ]);

  document.getElementById("detailModal").classList.remove("hidden");
}

function fillList(id, items) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  items.forEach(text => {
    if (text !== "—") {
      const li = document.createElement("li");
      li.innerText = text;
      ul.appendChild(li);
    }
  });
}

function closeDetail() {
  document.getElementById("detailModal").classList.add("hidden");
}
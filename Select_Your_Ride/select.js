const vehicles = [
  { name: "Yamaha MT-15", type: "bike", comfort: 75, control: 85, posture: 70, usage: 65, seat: 810 },
  { name: "Royal Enfield Classic 350", type: "bike", comfort: 85, control: 70, posture: 90, usage: 60, seat: 805 },
  { name: "TVS Ntorq 125", type: "scooter", comfort: 80, control: 75, posture: 85, usage: 85, seat: 770 },
  { name: "Honda Activa 6G", type: "scooter", comfort: 78, control: 72, posture: 82, usage: 90, seat: 765 },
  { name: "Hyundai i20", type: "car", comfort: 88, control: 85, posture: 90, usage: 70 },
  { name: "Kia Seltos", type: "suv", comfort: 90, control: 82, posture: 92, usage: 65 }
];

let selected = null;
let compare = [];

/* UI helpers */
function goHome() {
  window.location.href = "../index.html";
}
// live slider text update
document.getElementById("usage").oninput = e => {
  const v = e.target.value;
  document.getElementById("usageText").innerText =
    v < 40 ? "Mostly city usage" :
    v > 60 ? "Mostly highway usage" :
    "Balanced usage";
};

document.getElementById("frequency").oninput = e => {
  const v = e.target.value;
  document.getElementById("freqText").innerText =
    v < 40 ? "Occasional usage" :
    v > 60 ? "Daily usage" :
    "Moderate usage";
};

function toggleAdvanced() {
  const box = document.getElementById("advancedBox");
  box.classList.toggle("hidden");
}

function avg(v) {
  return Math.round((v.comfort + v.control + v.posture + v.usage) / 4);
}

/* Recommendation */
function recommend() {
console.log("Recommend clicked");
  const type = document.getElementById("type").value;
  const height = +document.getElementById("height").value;
  const leg = +document.getElementById("legHeight").value || height * 0.45;

  const results = document.getElementById("results");
  results.innerHTML = "";
  compare = [];

  const list = vehicles
    .filter(v => v.type === type)
    .map(v => {
      let penalty = v.seat ? Math.abs(v.seat - leg * 2) / 10 : 0;
      return { ...v, score: avg(v) - penalty };
    })
    .sort((a, b) => b.score - a.score);

  list.forEach((v, i) => {
    results.innerHTML += `
      <div class="card">
        ${i === 0 ? "<div class='best'>⭐ Best for you</div>" : ""}
        <b>${v.name}</b><br>
        Score: ${Math.round(v.score)}/100<br><br>
        <button onclick='showDetail(${JSON.stringify(v)})'>Details</button>
      </div>
    `;
  });
}

/* Detail modal */
function showDetail(v) {
  selected = v;
  document.getElementById("detailModal").classList.remove("hidden");

  document.getElementById("dName").innerText = v.name;
  document.getElementById("dScore").innerText = `Overall Score: ${Math.round(v.score)}/100`;

  document.getElementById("barComfort").style.width = v.comfort + "%";
  document.getElementById("barControl").style.width = v.control + "%";
  document.getElementById("barPosture").style.width = v.posture + "%";
  document.getElementById("barUsage").style.width = v.usage + "%";

  document.getElementById("whyFit").innerHTML =
    "<li>Posture matches your body</li><li>Usage suits your riding style</li>";

  document.getElementById("whyNot").innerHTML =
    v.seat ? "<li>Seat height may need adjustment</li>" : "<li>No major drawbacks</li>";
}

function closeDetail() {
  document.getElementById("detailModal").classList.add("hidden");
}

/* Compare */
function selectCompare() {
  if (!compare.includes(selected)) compare.push(selected);
  closeDetail();
  if (compare.length === 2) openCompare();
}

function openCompare() {
  const box = document.getElementById("compareContent");
  box.innerHTML = "";

  compare.forEach(v => {
    box.innerHTML += `
      <div class="card">
        <b>${v.name}</b><br>
        Comfort: ${v.comfort}<br>
        Control: ${v.control}<br>
        Posture: ${v.posture}<br>
        Usage: ${v.usage}<br>
        <b>Total: ${Math.round(v.score)}</b>
      </div>
    `;
  });

  document.getElementById("compareModal").classList.remove("hidden");
}

function closeCompare() {
  document.getElementById("compareModal").classList.add("hidden");
  compare = [];
}
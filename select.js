const vehicles = [
  {name:"Yamaha MT-15", type:"bike", seat:810, comfort:85, control:90, posture:80, cityBias:60},
  {name:"TVS Ntorq 125", type:"scooter", seat:770, comfort:80, control:78, posture:82, cityBias:85},
  {name:"Honda Activa 6G", type:"scooter", seat:765, comfort:78, control:76, posture:80, cityBias:90},
  {name:"Hyundai i20", type:"car", seat:740, comfort:88, control:85, posture:90, cityBias:55},
  {name:"Kia Seltos", type:"suv", seat:820, comfort:90, control:82, posture:92, cityBias:50}
];

let selected = null;
let compare = [];

function $(id){ return document.getElementById(id); }

function avg(v){
  return Math.round(
    (v.comfort + v.control + v.posture + v.cityBias) / 4
  );
}

function recommend(){
  const type = $("type").value;
  const box = $("results");
  box.innerHTML = "";
  compare = [];

  vehicles.filter(v=>v.type===type)
    .sort((a,b)=>avg(b)-avg(a))
    .forEach((v,i)=>{
      const d=document.createElement("div");
      d.className="card";
      d.innerHTML=`
        ${i===0?'<div class="best">⭐ Best for you</div>':''}
        <b>${v.name}</b><br>
        Score: ${avg(v)}/100
        <button onclick='showDetail(${JSON.stringify(v)})'>Details</button>
      `;
      box.appendChild(d);
    });
}

function showDetail(v){
  selected=v;
  $("detailModal").classList.remove("hidden");
  $("dName").innerText=v.name;
  $("dScore").innerText=`Score: ${avg(v)}/100`;
  $("barComfort").style.width=v.comfort+"%";
  $("barControl").style.width=v.control+"%";
  $("barPosture").style.width=v.posture+"%";
  $("barUsage").style.width=v.cityBias+"%";
  $("whyFit").innerHTML="<li>Good posture match</li>";
  $("whyNot").innerHTML="<li>No major drawbacks</li>";
}

function closeDetail(){ $("detailModal").classList.add("hidden"); }

function selectCompare(){
  if(!compare.includes(selected)) compare.push(selected);
  closeDetail();
  if(compare.length===2) openCompare();
}

function openCompare(){
  const box=$("compareContent");
  box.innerHTML="";
  compare.forEach(v=>{
    box.innerHTML+=`
      <div class="card">
        <b>${v.name}</b><br>
        Comfort ${v.comfort}<br>
        Control ${v.control}<br>
        Posture ${v.posture}<br>
        Usage ${v.cityBias}
      </div>
    `;
  });
  $("compareModal").classList.remove("hidden");
}

function closeCompare(){
  $("compareModal").classList.add("hidden");
  compare=[];
}

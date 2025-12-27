async function loadSelect() {
  document.getElementById("appTitle").innerText = "Select Your Ride";
  document.querySelector(".subtitle").innerText =
    "Smart recommendations based on you";

  const html = await fetch("Select_Your_Ride/select.html")
    .then(r => r.text());

  document.getElementById("app").innerHTML = html;

  if (!document.getElementById("select-css")) {
    const link = document.createElement("link");
    link.id = "select-css";
    link.rel = "stylesheet";
    link.href = "Select_Your_Ride/select.css";
    document.head.appendChild(link);
  }

  const script = document.createElement("script");
  script.src = "Select_Your_Ride/select.js";
  script.defer = true;
  document.body.appendChild(script);
}

function loadKnow() {
  document.getElementById("appTitle").innerText = "Know Your Ride";
  document.querySelector(".subtitle").innerText =
    "Explore brands, history & evolution";

  document.getElementById("app").innerHTML = `
    <h2>Know Your Ride</h2>
    <p>
      This module will show company history, milestones, and iconic vehicles.<br><br>
      (We will build this module step by step.)
    </p>
  `;
}

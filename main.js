function loadSelect() {
  document.getElementById("appTitle").innerText = "Select Your Ride";
  document.querySelector(".subtitle").innerText =
    "Smart recommendations based on you";

  document.getElementById("app").innerHTML = `
    <h2>Select Your Ride</h2>
    <p>
      This module will load the full V3 recommendation engine.<br><br>
      (We will connect the real Select Your Ride module next.)
    </p>
  `;
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

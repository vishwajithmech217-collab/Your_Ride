
async function loadSelect() {
  const app = document.getElementById("app");

  // RESET app container
  app.innerHTML = "";
  app.style.position = "relative";
  app.style.minHeight = "auto";
  app.style.background = "transparent";

  try {
    const res = await fetch("Select_Your_Ride/select.html");
    app.innerHTML = await res.text();

    // Load select.css
    if (!document.getElementById("select-css")) {
      const link = document.createElement("link");
      link.id = "select-css";
      link.rel = "stylesheet";
      link.href = "Select_Your_Ride/select.css";
      document.head.appendChild(link);
    }

    // Load select.js
    const script = document.createElement("script");
    script.src = "Select_Your_Ride/select.js";
    script.defer = true;
    document.body.appendChild(script);

  } catch (e) {
    app.innerHTML = "<p style='color:red'>Failed to load Select Your Ride</p>";
  }
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

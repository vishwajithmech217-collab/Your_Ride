async function loadSelect() {
  const app = document.getElementById("app");

  app.innerHTML = "Loading...";

  try {
    const res = await fetch("Select_Your_Ride/select.html");
    if (!res.ok) throw new Error("404");

    app.innerHTML = await res.text();

    // load CSS
    if (!document.getElementById("select-css")) {
      const link = document.createElement("link");
      link.id = "select-css";
      link.rel = "stylesheet";
      link.href = "Select_Your_Ride/select.css";
      document.head.appendChild(link);
    }

    // load JS
    const script = document.createElement("script");
    script.src = "Select_Your_Ride/select.js";
    script.defer = true;
    document.body.appendChild(script);

  } catch (e) {
    app.innerHTML = "<h3>❌ Select Your Ride not found</h3>";
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

const groups = [
  {
    name: "Bangalore Night Riders",
    city: "Bangalore",
    type: "City / Night Ride",
    riders: "40+",
    schedule: "Friday nights"
  },
  {
    name: "Chennai Highway Crew",
    city: "Chennai",
    type: "Highway",
    riders: "25+",
    schedule: "Sunday mornings"
  },
  {
    name: "Hyderabad Tourers",
    city: "Hyderabad",
    type: "Touring",
    riders: "30+",
    schedule: "Monthly tours"
  },
  {
    name: "Mumbai Weekend Riders",
    city: "Mumbai",
    type: "City / Highway",
    riders: "50+",
    schedule: "Weekend mornings"
  }
];

const citySelect = document.getElementById("citySelect");
const groupsContainer = document.getElementById("groups");

// Populate city dropdown
const cities = ["all", ...new Set(groups.map(g => g.city))];
cities.forEach(city => {
  const option = document.createElement("option");
  option.value = city;
  option.textContent = city === "all" ? "All Cities" : city;
  citySelect.appendChild(option);
});

function renderGroups(filterCity = "all") {
  groupsContainer.innerHTML = "";

  groups
    .filter(g => filterCity === "all" || g.city === filterCity)
    .forEach(g => {
      const card = document.createElement("div");
      card.className = "group-card";
      card.innerHTML = `
        <span class="badge">VIEW ONLY</span>
        <h3>${g.name}</h3>
        <div class="group-meta">📍 ${g.city}</div>
        <div class="group-meta">🏍 ${g.type}</div>
        <div class="group-meta">👥 ${g.riders} riders</div>
        <div class="group-meta">🕒 ${g.schedule}</div>
      `;
      groupsContainer.appendChild(card);
    });
}

citySelect.addEventListener("change", () => {
  renderGroups(citySelect.value);
});

// Initial render
renderGroups();

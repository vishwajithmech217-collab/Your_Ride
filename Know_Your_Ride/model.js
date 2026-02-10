document.addEventListener("DOMContentLoaded", async () => {

  const params = new URLSearchParams(window.location.search);
  const modelId = params.get("id");

  if (!modelId) {
    document.body.innerHTML = "<h2>Invalid vehicle</h2>";
    return;
  }

  /* LOAD DATA FROM SELECT YOUR RIDE */
  const [bikeRes, carRes] = await Promise.all([
    fetch("../Select_Your_Ride_V5/data/bike.json"),
    fetch("../Select_Your_Ride_V5/data/car.json")
  ]);

  const bikes = await bikeRes.json();
  const cars = await carRes.json();

  const ALL_VEHICLES = [...bikes, ...cars];

  /* FIND VEHICLE */
  const vehicle = ALL_VEHICLES.find(v => v.id === modelId);

  if (!vehicle) {
    document.body.innerHTML = "<h2>Vehicle not found</h2>";
    return;
  }

  /* BASIC INFO */
  document.getElementById("modelTitle").textContent =
    `${vehicle.brand} · ${vehicle.model}`;

  document.getElementById("brand").textContent = vehicle.brand;
  document.getElementById("category").textContent =
    vehicle.bodyType || vehicle.category || "—";
  document.getElementById("engine").textContent =
    vehicle.engine_cc ? `${vehicle.engine_cc} cc` : "—";
  document.getElementById("year").textContent =
    vehicle.launchYear || "—";
  document.getElementById("type").textContent =
    vehicle.type || "—";

  /* SPECS (SAFE FALLBACKS) */
  document.getElementById("specPower").textContent =
    vehicle.power_ps || vehicle.power || "—";

  document.getElementById("specTorque").textContent =
    vehicle.torque_nm || vehicle.torque || "—";

  document.getElementById("specMileage").textContent =
    vehicle.mileage || "—";

  document.getElementById("specWeight").textContent =
    vehicle.weight || "—";

  document.getElementById("specFuel").textContent =
    vehicle.fuelType || vehicle.fuel || "—";
});
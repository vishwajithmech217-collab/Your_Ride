document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  let foundModel = null;
  let foundBrand = null;

  window.BRANDS.forEach(b => {
    b.models.forEach(m => {
      if (m.id === id) {
        foundModel = m;
        foundBrand = b;
      }
    });
  });

  if (!foundModel) {
    document.body.innerHTML = "<h2>Model not found</h2>";
    return;
  }

  document.getElementById("title").textContent =
    `${foundBrand.brand} ${foundModel.name}`;

  document.getElementById("details").innerHTML = `
    <li>Type: ${foundModel.type}</li>
    <li>Category: ${foundModel.category}</li>
    <li>Engine: ${foundModel.engine}</li>
    <li>Launch Year: ${foundModel.launchYear}</li>
  `;
});
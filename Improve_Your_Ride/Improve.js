const buttons = document.querySelectorAll(".item");
const contents = document.querySelectorAll(".content");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;

    contents.forEach(c => {
      c.style.display = (c.id === target && c.style.display !== "block")
        ? "block"
        : "none";
    });
  });
});

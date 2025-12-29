alert("select.js LOADED");

console.log("select.js loaded");

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("recommendBtn").addEventListener("click", () => {
    alert("Get Recommendation clicked");
  });

  document.getElementById("advancedBtn").addEventListener("click", () => {
    alert("Advanced Options clicked");
  });

  document.getElementById("detailsBtn").addEventListener("click", () => {
    alert("Details clicked");
  });

});
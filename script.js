// Code Review Comment: 
// Would love to see the JS script file organized in a separate folder

function hideDonate() {
  document.querySelector(".donate").style.display = "none";
  document.querySelector(".choose").style.display = "flex";
  document.querySelector(".help").style.display = "flex";
}

function hideChoose() {
  document.querySelector(".choose").style.display = "none";
  document.querySelector(".donate").style.display = "flex";
  document.querySelector(".help").style.display = "none";
}

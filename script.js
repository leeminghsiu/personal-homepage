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

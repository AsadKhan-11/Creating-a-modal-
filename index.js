var btn = document.getElementById("btn");
var modal = document.getElementById("modal");
var close = document.getElementById("btn-x");

btn.addEventListener("click", onclick);
close.addEventListener("click", closeM);
window.addEventListener("click", onwindow);

function onclick() {
  modal.style.display = "block";
}

function closeM() {
  modal.style.display = "none";
}

function onwindow(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  } else {
  }
}

function DropDownNavbar(x) {
  x.classList.toggle("change");
  var headernav = document.getElementById("head-nav");

  if (headernav.style.display == "block") {
    headernav.style.display = "none";
  } else {
    headernav.style.display = "block";
  }
}

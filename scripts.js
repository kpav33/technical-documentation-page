function mobileMenu() {
    var x = document.getElementById("navbar");
    var y = document.getElementById("main-doc")
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.marginTop = "2rem";
    } else {
      x.style.display = "block";
      y.style.marginTop = "18rem";
    }
  }

function onResize() {
  var x = document.getElementById("navbar");
  var y = document.getElementById("main-doc")
  var w = window.innerWidth;
  if (w > 768) {
    x.style.display = "block";
    y.style.marginTop ="5rem";
  } else {
    x.style.display = "none";
    y.style.marginTop = "2rem";
  }
}

window.addEventListener("resize", onResize);
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
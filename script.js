const backGear = document.getElementById("top");
backGear.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", function () {
  var backToTop = document.querySelector(".back_to_top");

  if (window.scrollY > 20) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

// sticky menu transparency
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 1;
  } else {
    document.querySelector("#navbar").style.opacity = 0.9;
  }
});

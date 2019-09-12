window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  document.querySelector(".iheader").style.height = "50px";
  document.querySelector(".ilogo").style.display = "none";
  document.querySelector(".hspan").style.display = "none";
  document.querySelector(".timeline").style.paddingTop = "80px";

  console.log(window.scrollY);
  if (window.scrollY <= 0) {
    document.querySelector(".iheader").style.height = "76px";
    document.querySelector(".ilogo").style.display = "block";
    document.querySelector(".hspan").style.display = "block";
    document.querySelector(".timeline").style.paddingTop = "1px";
  }
});

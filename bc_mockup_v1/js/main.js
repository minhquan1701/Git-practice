const slideBar = document.querySelectorAll(".bar");
const btnToTop = document.querySelector(".btn-to-top");
const scroll = document.querySelector(".scroll");

btnToTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

function removeBarPressed() {
  slideBar.forEach((bar) => {
    if ((bar.style.background = "#a09d9d")) {
      bar.style.background = "transparent";
    }
  });
}

slideBar.forEach((el) => {
  el.addEventListener("mousedown", () => {
    removeBarPressed();
    el.style.background = "#a09d9d";
  });
});

scroll.addEventListener("click", () => {
  window.scrollTo(0, 720);
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }
});

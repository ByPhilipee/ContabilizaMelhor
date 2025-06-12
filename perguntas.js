document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".duvida-toggle").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const item = btn.closest(".duvida-item");
      item.classList.toggle("open");
      btn.classList.toggle("open");
    });
  });
});

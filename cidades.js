document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".cidade-item");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  let current = 0;

  function showItem(idx) {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === idx);
    });
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % items.length;
    showItem(current);
  });

  showItem(current);
});

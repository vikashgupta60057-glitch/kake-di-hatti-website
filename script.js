const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".menu-card").forEach((card) => {
  card.addEventListener("click", () => {
    const image = card.getAttribute("data-img");

    lightboxImg.src = image;

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeBox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

closeLightbox.addEventListener("click", closeBox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeBox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeBox();
  }
});

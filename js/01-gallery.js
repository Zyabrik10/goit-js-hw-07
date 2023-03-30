import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

// init gallery
// =================================================================
const li = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}" >
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    />
    </a>
    </li>`;
  })
  .join("\n");

galleryList.insertAdjacentHTML("afterbegin", li);

// prohibit redirections for refernces
// =================================================================
document
  .querySelectorAll(".gallery__link")
  .forEach((item) =>
    item.addEventListener("click", (event) => event.preventDefault())
  );

// click on gallery items
// =================================================================
function openFullImage(event) {
  if (event.target.nodeName !== "IMG") return;

  const fullImageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${fullImageUrl}" width="800" height="600">`
  );

  instance.show();

  window.addEventListener("keydown", function closeFullImage(event) {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", closeFullImage);
    }
  });
}

galleryList.addEventListener("click", openFullImage);

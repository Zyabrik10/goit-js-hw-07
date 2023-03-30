import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

// init gallery
// =================================================================
const li = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
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

const gallery = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionDelay: 250,
});

import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
// console.log(galleryItems);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
  />
  </a>
</li>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery__item a", {
  // captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});

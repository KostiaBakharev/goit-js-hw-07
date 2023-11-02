// 1 - Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2 - Реалізація делегування на ul.gallery і отримання url великого зображення.
// 3 - Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4 - Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5 - Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click", handleClick);
galleryList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
console.log(galleryItems);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
</li>`
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const previewImg = event.target;
  const originalImg = previewImg.dataset.source;
  const descrImg = previewImg.alt;

  const instance = basicLightbox.create(
    `<div"><img src="${originalImg}" alt="${descrImg}" /></div>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onKeyPress);
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", onKeyPress);
      },
    }
  );
  instance.show();

  function onKeyPress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}

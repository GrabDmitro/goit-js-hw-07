import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = galleryItems.map((image) => {
  const fragment = document.createElement("li");
  fragment.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = image.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = image.preview;
  img.alt = image.description;
  // img.dataset.source = image.original;

  fragment.appendChild(link);
  link.appendChild(img);
  return fragment;
});
const galleryRef = document.querySelector(".gallery");
console.log(galleryItems);
galleryRef.append(...list);
var lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionDelay: 250,
  captionsData: "alt",
});

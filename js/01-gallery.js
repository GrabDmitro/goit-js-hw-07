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
  img.dataset.source = image.original;

  fragment.appendChild(link);
  link.appendChild(img);
  return fragment;
});
const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName != "IMG") {
    return;
  }
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`
    )
    .show();
});
galleryRef.append(...list);

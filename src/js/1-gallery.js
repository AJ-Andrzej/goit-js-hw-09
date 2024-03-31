import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {images} from "./images"

const container = document.querySelector(".gallery");
container.innerHTML = createMarkup(images)
    
function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
    `
    ).join("")
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
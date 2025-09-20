// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryElem = document.querySelector(".gallery");
const loaderElem = document.querySelector(".loader");

let lightbox = null;

function createMarkup(images) {
  return images
    .map(
      (img) => `
      <li class="gallery-item">
        <a class="img-link" href="${img.largeImageURL}">
          <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <ul class="img-list">
          <li class="img-item">
            <h3 class="img-title">Likes</h3>
            <p class="img-text">${img.likes}</p>
          </li>
          <li class="img-item">
            <h3 class="img-title">Views</h3>
            <p class="img-text">${img.views}</p>
          </li>
          <li class="img-item">
            <h3 class="img-title">Comments</h3>
            <p class="img-text">${img.comments}</p>
          </li>
          <li class="img-item">
            <h3 class="img-title">Downloads</h3>
            <p class="img-text">${img.downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join("");
}

export function clearGallery() {
  galleryElem.innerHTML = "";
}

export function showLoader() {
  loaderElem.classList.remove("visually-hidden");
}

export function hideLoader() {
  loaderElem.classList.add("visually-hidden");
}

export function renderGallery(data) {
  
  const images = data.hits ? data.hits : data;

  if (!images.length) {
    return false;
  }

  const markup = createMarkup(images);
  galleryElem.insertAdjacentHTML("beforeend", markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a", {
      captions: true,
      captionsData: "alt",
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }

  return true;
}

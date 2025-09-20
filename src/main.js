
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { fetchImg } from "./js/pixabay-api";
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions";

import errorSvg from "./img/errorSVG.svg";
import cautionSvg from "./img/caution.svg";

const formElem = document.querySelector(".form");
const formInputElem = document.querySelector(".form-input");

formElem.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = formInputElem.value.trim();
  if (!query) {
    formElem.reset();
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await fetchImg(query);

    if (!data.hits.length) {
      iziToast.error({
        iconUrl: errorSvg,
        position: "topRight",
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });
    } else {
      renderGallery(data);
    }
  } catch (err) {
    iziToast.warning({
      iconUrl: cautionSvg,
      position: "topRight",
      message: `${err}`,
    });
  } finally {
    hideLoader();
    formElem.reset();
  }
});

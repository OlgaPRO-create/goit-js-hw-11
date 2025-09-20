// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import {fetchImg} from './js/pixabay-api';
import { markUp } from "./js/render-functions";

import errorSvg from './img/errorSVG.svg';
import cautionSvg from './img/caution.svg';

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const formElem = document.querySelector('.form');
const formInputElem = document.querySelector('.form-input');
const loaderElem = document.querySelector('.loader');
const galleryElem = document.querySelector('.gallery');

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionsDalay: 250,
});
formElem.addEventListener('submit', e => {
    e.preventDefault();
    if (!formElem.input.value.trim()) {
        formElem.reset();
        return;
    }
    galleryElem.innerHTML = '';
    loaderElem.classList.remove('visually-hidden');
    fetchImg(formElem.input.value.trim())
    .then(data => {
        if (!data.total) {
         iziToast.error({
            iconUrl: errorSvg,
            position: 'topRight',
            message:
            'Sorry, there are no images matching your search query. Please try again!',
         });
        }
        galleryElem.insertAdjacentHTML('afterbegin',markUp(data));
        gallery.refresh();
        loaderElem.classList.add('visually-hidden');
    })
    .catch(err => {
        loaderElem.classList.add('visually-hidden');
        iziToast.warning({
            iconUrl: cautionSvg,
            position: 'topRight',
            message: '$(err)',
        });
    });
    formElem.reset();
});

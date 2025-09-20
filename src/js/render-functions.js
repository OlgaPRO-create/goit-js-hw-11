export function markUp(imgs) {
    return imgs.hits
    .map(img => {
        return `<li class="gallery-item">
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
        </li>`;
    })
    .join('');
}
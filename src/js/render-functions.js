import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");
const loaderElement = document.querySelector('.loader');

let lightbox = null;

export function clearGallery() {
  gallery.innerHTML = '';
}

export function createGallery(images) {
  const markup = images
    .map(({
        webformatURL,
        largeImageURL, 
        tags,  
        likes, 
        views, 
        comments, 
        downloads 
    }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img 
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
          loading="lazy"
      />
      </a>
      <dl class="image-info">
        <div class="image-info-wrapper">
          <dt class="image-info-label">Likes</dt>
          <dd class="image-info-value">${likes}</dd>
        </div>
        <div class="image-info-wrapper">
          <dt class="image-info-label">Views</dt>
          <dd class="image-info-value">${views}</dd>
        </div>
        <div class="image-info-wrapper">
          <dt class="image-info-label">Comments</dt>
          <dd class="image-info-value">${comments}</dd>
        </div>
        <div class="image-info-wrapper">
          <dt class="image-info-label">Downloads</dt>
          <dd class="image-info-value">${downloads}</dd>
        </div>
      </dl>
    </li>
    `).join(""); 

  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery .gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function showLoader() {
  if (loaderElement) {
    loaderElement.classList.remove('is-hidden');
  }
}

export function hideLoader() {
  if (loaderElement) {
    loaderElement.classList.add('is-hidden');
  }
}
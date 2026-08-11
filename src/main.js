import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";

const searchForm = document.querySelector(".form");
const loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;
let searchQuery = '';
let cardShown = 0;

searchForm.addEventListener("submit", onSearch);

async function onSearch(event) {
    event.preventDefault();

    const query = event.currentTarget.elements['search-text'].value.trim();

    if (query === '') {
    iziToast.error({
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  searchQuery = query;
  page = 1;
  cardShown = 0;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try{
    const data = await getImagesByQuery(searchQuery, page);
    if (!data || !data.hits || data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    } else {
      cardShown += data.hits.length;
      createGallery(data.hits);
      if (cardShown < data.totalHits) {
        showLoadMoreButton();
      } else {
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      }
    }
  } catch (error) {
      console.error(error);
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    } finally {
        hideLoader();
        searchForm.reset()
    }
}

loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleLoadMore() {
  page += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(searchQuery, page);
    cardShown += data.hits.length;
    createGallery(data.hits);

    setTimeout(() => {
      const fotoCard = document.querySelector('.gallery-item');
      if (fotoCard) {
        const fotoCardHeight = fotoCard.getBoundingClientRect().height;

        window.scrollBy({
          left: 0,
          top: fotoCardHeight * 2,
          behavior: 'smooth', 
        });
      }
    }, 100);
    
    if (cardShown < data.totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    console.error(error);
    showLoadMoreButton();
    iziToast.error({
      message: 'Something went wrong. Please try again later!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

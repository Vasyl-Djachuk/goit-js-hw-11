'use strict';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector(`.gallery`);

const form = document.querySelector(`.form`);
form.addEventListener(`submit`, formSearch);

function formSearch(event) {
  event.preventDefault();
  let userText = event.target.elements.search.value.trim();

  if (userText === ``) {
    iziToast.show({
      message: '❌ Field must be filled in',
      position: `topLeft`,
      color: `red`,
    });
    return;
  }
  form.reset();
  const parameters = new URLSearchParams({
    key: `41274788-792c8d92905fcf9da75194117`,
    q: `${userText}`,
    image_type: `photo`,
    orientation: `horizontal`,
    // safesearch: `true`,
  }).toString();

  const urlSearch = `https://pixabay.com/api/?${parameters}`;
  fetch(urlSearch)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(answerFromServer => {
      if (answerFromServer.hits.length === 0) {
        iziToast.show({
          message:
            '❌ Sorry, there are no images matching your search query. Please try again!',
          position: `topLeft`,
          color: `red`,
        });
        return;
      }
      galleryCreate(answerFromServer.hits);
    })
    .catch(error => {
      console.log(error);
    });
}
// const timeId = setTimeout();
function galleryCreate(imageArrow) {
  let listCode = ``;
  imageArrow.forEach(image => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = image;

    listCode += `<li class="gallery-item">
          <a class="link" href="${largeImageURL}">
            <img class="form-img" src="${webformatURL}" alt="${tags}" />
            <ul class="description-list">
              <li class="description-item">
                <p class="text-">Likes</p>
                <p class="number">${likes}</p>
              </li>
              <li class="description-item">
                <p class="text-">Views</p>
                <p class="number">${views}</p>
              </li>
              <li class="description-item">
                <p class="text-">Comments</p>
                <p class="number">${comments}</p>
              </li>
              <li class="description-item">
                <p class="text-">Downloads</p>
                <p class="number">${downloads}</p>
              </li>
            </ul>
          </a>
        </li>`;
  });

  gallery.insertAdjacentHTML('afterbegin', listCode);
}

// let listCode = ``;
// for (const img of images) {
//   listCode += `<li><img src="${img.url}" alt="${img.alt}" width="360" height="300"></li>`;
// }
// document.querySelector(`.gallery`).insertAdjacentHTML('afterbegin', listCode);

//  const item = document.createElement(`li`);
//  item.classList.add('gallery-item');

//  const galleryImage = document.createElement(`img`);
//  galleryImage.classList.add('gallery-image');
//  galleryImage.src = preview;
//  galleryImage.alt = alt;

//  const link = document.createElement(`a`);
//  link.classList.add(`gallery-link`);
//  link.href = original;

//  link.append(galleryImage);
//  item.append(link);
//  items.push(item);

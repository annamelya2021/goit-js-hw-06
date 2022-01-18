const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeGallery = array => {
  const arrayEls = array.map(image => {
    return `<li><img src="${image.url}" alt="${image.alt}"></li>`;
  });
  return arrayEls.join('');


};

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('afterbegin', makeGallery(images));


const itemsLiRefs = galleryRef.querySelectorAll('li');
itemsLiRefs.forEach(itemLi => {
  itemLi.classList.add('gallery__item');
  itemLi.firstChild.classList.add('gallery__img');
});
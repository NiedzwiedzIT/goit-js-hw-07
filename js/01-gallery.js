import { galleryItems } from './gallery-items.js';
 
// Change code below this line
const galleryRef = document.querySelector('.gallery');
let imgSource = '';
let instance;
 
galleryRef.insertAdjacentHTML(
  'beforeend',
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `
        <div class='gallery__item'>
          <a class='gallery__link'  href='${original}'>
            <img
              class='gallery__image'
              src='${preview}'
              data-source='${original}'
              alt='${description}'
            />
          </a>
        </div>
        `
    )
    .join("")
);
  
galleryRef.addEventListener('click', (event) => {
  event.preventDefault();
    if (!event.target.classList.contains('gallery__image'))
        return;

  imgSource = event.target.dataset.source;
  const keyEscape = ({ key }) => {
      if (key === 'Escape' && instance.visible())
            instance.close();
          
  };

  instance = basicLightbox.create(
    `<img src='${imgSource}' width='800' height='600'>`,
    {
      onShow: (instance) => {        
        document.addEventListener('keydown', keyEscape);
      },
      onClose: (instance) => {        
        document.removeEventListener('keydown', keyEscape);
      },
    }
  );
 
  instance.show();
});
 

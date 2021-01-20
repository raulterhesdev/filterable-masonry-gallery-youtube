window.addEventListener('DOMContentLoaded', () => {
  const filterContainer = document.querySelector('#filter-container');
  const galleryContainer = document.querySelector('#gallery-container');

  const filterImages = (event) => {
    document.querySelectorAll('.filter-element').forEach((element) => {
      element.classList.remove('filter-active');
    });
    event.target.classList.add('filter-active');

    document.querySelectorAll('.gallery-image').forEach((element) => {
      if (
        (event.target.id !== element.dataset.category) &
        (event.target.id !== 'all')
      ) {
        element.classList.add('hide-image');
      } else {
        element.classList.remove('hide-image');
      }
    });
  };

  categories.forEach((element) => {
    const domElement = document.createElement('span');
    domElement.innerText = element.name;
    domElement.classList.add('filter-element');
    if (element.filter === 'all') {
      domElement.classList.add('filter-active');
    }
    domElement.id = element.filter;
    domElement.addEventListener('click', filterImages);

    filterContainer.appendChild(domElement);
  });

  images.forEach((element) => {
    const domElement = document.createElement('img');
    domElement.src = `images/${element.url}`;
    domElement.alt = element.title;
    domElement.dataset.category = element.category;
    domElement.classList.add('gallery-image');

    galleryContainer.appendChild(domElement);
  });
});

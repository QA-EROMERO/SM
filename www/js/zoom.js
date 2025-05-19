/*
const image = document.querySelector('#threesixty_images');

image.addEventListener('mouseover', () => {
  image.style.transform = 'scale(1.5)';
});

image.addEventListener('mouseout', () => {
  image.style.transform = 'scale(1)';
});
*/


const image = document.querySelector('#threesixty');

image.addEventListener('mousewheel', (event) => {
  if (event.deltaY > 0) {
    // Scroll hacia abajo
    image.style.zoom = '150%';
  } else {
    // Scroll hacia arriba
    image.style.zoom = '100%';
  }
});
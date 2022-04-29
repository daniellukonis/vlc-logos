const navToggleButton = document.querySelector('#nav-toggle-button');
const bottom = document.querySelector('.bottom');
navToggleButton.addEventListener('click', () => {
  bottom.classList.toggle('bottom-toggle');
});

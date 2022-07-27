(function () {
  function init() {
    const router = new Router([
      new Route('home', 'home.html', true),
      new Route('work', 'work.html'),
      new Route('about', 'about.html'),
      new Route('media', 'media.html'),
      new Route('career', 'career.html'),
      new Route('terms', 'terms.html'),
    ]);
  }
  init();
}());

// MODAL ENTER LC
const modal = document.getElementById('myModal');

const modalForm = document.getElementById('modalForm');
const formEnter = document.getElementById('enterForm');

const btn = document.getElementById('orderBtn');
const span = document.getElementsByClassName('close')[0];
const terms = document.getElementById('termsLink');
const enter = document.getElementById('signIn');

// MODAL BACK BTN
const back = document.getElementById('back');

/// /FUNCTION ENTER BTN
enter.onclick = function () {
  if (modal.style.display = 'block') {
    modalForm.style.display = 'none';
  } formEnter.style.display = 'block';
};
/// /FUNCTION BACK BTN
back.onclick = function () {
  if (formEnter) {
    formEnter.style.display = 'none';
  } modalForm.style.display = 'block';
};

// FUNCTION ENTER MODAL
btn.onclick = function () {
  modal.style.display = 'block';
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
terms.onclick = function () {
  modal.style.display = 'none';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
// REGISTR AND ENTER

// MENU BURGER
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

menu.addEventListener('click', () => {
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
});

const toggle = document.querySelector('.menu-toggle input');
const uul = document.querySelector('nav ul');
const cek = document.querySelector('.check');

// for menu
const home = document.querySelector('.home');
const fhoto = document.querySelector('.foto');
const about = document.querySelector('.about');
const foother = document.querySelector('.foot');

toggle.addEventListener('click', function () {
  uul.classList.toggle('slide');
});

home.addEventListener('click', function () {
  uul.classList.toggle('slide');
  cek.checked = false;
});

fhoto.addEventListener('click', function () {
  uul.classList.toggle('slide');
  cek.checked = false;
});

about.addEventListener('click', function () {
  uul.classList.toggle('slide');
  cek.checked = false;
});

foother.addEventListener('click', function () {
  uul.classList.toggle('slide');
  cek.checked = false;
});

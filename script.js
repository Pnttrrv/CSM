const toggle = document.querySelector('.menu-toggle input');
const uul = document.querySelector('nav ul');

toggle.addEventListener('click', function () {
  uul.classList.toggle('slide');
});

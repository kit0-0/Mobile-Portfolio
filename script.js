const menu = document.getElementById('nav-elements');
const menuOpenClose = document.getElementById('menu');
const logo = document.getElementById('logo');
const mobileNavList = document.querySelectorAll('.mobile-nav-list');

function togglerMenu() {
  menu.classList.toggle('active');
  menuOpenClose.classList.toggle('open');
  menuOpenClose.classList.toggle('close');
  logo.classList.toggle('hide');
}

mobileNavList.forEach((element) => {
  element.addEventListener('click', togglerMenu);
});
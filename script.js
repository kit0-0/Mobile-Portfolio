const menu = document.getElementById('nav-elements');
const menuOpenClose = document.getElementById('menu');
const logo = document.getElementById('logo');

function togglerMenu() {
  menu.classList.toggle('active');
  menuOpenClose.classList.toggle('open');
  menuOpenClose.classList.toggle('close');
  logo.classList.toggle('hide');
}

// Add click event listener to each mobile menu link
document.querySelectorAll('.mobile-nav-list a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      togglerMenu();
    }
  });
});
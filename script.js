const menu = document.getElementById('nav-elements');
const menuOpenClose = document.getElementById('menu');
const logo = document.getElementById('logo');
const mobileNavList = document.querySelectorAll('.mobile-nav-list');

function togglerMenu() {
  menu.classList.toggle('active');
  menuOpenClose.classList.toggle('open');
  menuOpenClose.classList.toggle('close');
  logo.classList.toggle('hide');
  document.body.classList.toggle('mobile-nav-open');
}

mobileNavList.forEach((element) => {
  element.addEventListener('click', togglerMenu);
});

// form validation
const form = document.querySelector('.contact-form');
const emailInput = form.querySelector('#email');
const errorMessage = form.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.textContent = 'Please enter a lower case email address.';
  }
});


form.addEventListener('input', () => {
  const formData = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem('UserData', JSON.stringify(formData));
});


const savedFormData = JSON.parse(localStorage.getItem('UserData'));
if (savedFormData) {
  Object.entries(savedFormData).forEach(([name, value]) => {
    const input = form.elements[name];
    if (input) {
      input.value = value;
    }
  });
}
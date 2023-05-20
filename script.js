const unionButton = document.querySelector('.menu-button');
const crossButton = document.querySelector('.cross-button');
const hamBar = document.querySelector('.ham-bar');
const scrollToLinks = document.querySelectorAll('.scroll');

function showMobileMenu() {
  hamBar.style.display = 'block';
}

function hideMobileMenu() {
  hamBar.style.display = 'none';
}

function scrollSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

scrollToLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    scrollSection(sectionId);
    hideMobileMenu();
  });
});

unionButton.addEventListener('click', showMobileMenu);
crossButton.addEventListener('click', hideMobileMenu);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-forms');
  const username = document.getElementById('fullname');
  const email = document.getElementById('email');

  function setError(elm, msg) {
    const inputControl = elm.parentElement;
    const errorDiv = inputControl.querySelector('.error');
    errorDiv.innerText = msg;
    inputControl.classList.add('error');
  }

  function clearError(elm) {
    const inputControl = elm.parentElement;
    const errorDiv = inputControl.querySelector('.error');
    errorDiv.innerText = '';
    inputControl.classList.remove('error');
  }

  function isLowerCase(str) {
    return str === str.toLowerCase();
  }

  function validateFormInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    clearError(username);
    clearError(email);

    if (usernameValue === '') {
      setError(username, 'Full Name is required');
    }

    if (emailValue === '') {
      setError(email, 'Email is required');
    } else if (!isLowerCase(emailValue)) {
      setError(email, 'Email must be in lowercase');
    } else {
      // Validation is OK, submit the form
      form.submit();
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateFormInputs();
  });
});

// preserve-data-in-the-browser

const nameField = document.querySelector('input[name="inputs-fullname"]');
const emailField = document.querySelector('input[name="inputs-email"]');
const messageField = document.querySelector('textarea[name="inputs-textarea"]');

function saveDataToLocalStorage() {
  const data = {
    name: nameField.value,
    email: emailField.value,
    message: messageField.value,
  };

  localStorage.setItem('formData', JSON.stringify(data));
}
window.addEventListener('load', () => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    const data = JSON.parse(savedData);
    nameField.value = data.name;
    emailField.value = data.email;
    messageField.value = data.message;
  }
});
nameField.addEventListener('input', saveDataToLocalStorage);
emailField.addEventListener('input', saveDataToLocalStorage);
messageField.addEventListener('input', saveDataToLocalStorage);

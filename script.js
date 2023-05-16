const unionButton = document.querySelector('.menu-button');
const crossButton = document.querySelector('.cross-button');
const hamBar = document.querySelector('.ham-bar');
const scrollToLinks = document.querySelectorAll('.scroll');
function showMobileMenu() {
  hamBar.style.display = 'block';
}
function hideMobileMenu() {
  hamBar.style.display = 'none';
<<<<<<< HEAD
=======
}
for (const link of scrollToLinks) {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    scrollSection(sectionId);
    hideMobileMenu();
  });
>>>>>>> b91736449cd4f4e7335ebd52eaccb37f18ea2668
}
function scrollSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
<<<<<<< HEAD
scrollToLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    scrollSection(sectionId);
    hideMobileMenu();
  });
});
=======
>>>>>>> b91736449cd4f4e7335ebd52eaccb37f18ea2668
unionButton.addEventListener('click', showMobileMenu);
crossButton.addEventListener('click', hideMobileMenu);

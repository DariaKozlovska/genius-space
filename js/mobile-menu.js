const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleModal = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleModal);
menuBtnClose.addEventListener('click', toggleModal);
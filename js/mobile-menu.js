const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuLink = document.querySelectorAll(".mobile-menu__item");

const toggleModalMobile = () => mobileMenu.classList.toggle("is-open");

menuBtnOpen.addEventListener("click", toggleModalMobile);
menuBtnClose.addEventListener("click", toggleModalMobile);
menuLink.forEach((element) => {
  element.addEventListener("click", toggleModalMobile);
});

const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");
modalBtnOpen.forEach((e) => {
  e.addEventListener("click", toggleModal);
});
modalBtnClose.addEventListener("click", toggleModal);

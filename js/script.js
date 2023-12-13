var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-nav-list");
const link = document.querySelector(".main-nav-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("open");
  
});

document.querySelectorAll('.main-nav-list').forEach(link=>{
  link.addEventListener('click', () => {
    headerEl.classList.remove("open");
  });
});
document.querySelectorAll('.main-nav-list').forEach(link=>{
  link.addEventListener('click', () => {
    let nav = document.getElementById("nav-toggler");
    nav.checked = false;
  });
});

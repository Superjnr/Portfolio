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

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);


const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth"});
    }
  });
});

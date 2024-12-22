//  NAVBAR
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerMenu.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
            mobileMenu.classList.add('translate-y-0', 'opacity-100');
        }, 10);
    } else {
        mobileMenu.classList.remove('translate-y-0', 'opacity-100');
        mobileMenu.classList.add('-translate-y-full', 'opacity-0');
        
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }
});

const menuLinks = document.querySelectorAll("ul li a");

const currentUrl = window.location.pathname;

menuLinks.forEach((link) => {
    if (link.getAttribute("href") === currentUrl) {
        link.classList.add("text-blue-800", "active");
    }
});


// SWIPER
const pekerjaanSwiper = new Swiper('.pekerjaan__carousel', {
    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: 16,
    breakpoints: {
        1024: { enabled: false, },
    },
});

const acaraSwiper = new Swiper('.acara__carousel', {
    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: 16,
    navigation: {
        nextEl: null,
        prevEl: null,
    },
})

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
    acaraSwiper.slideNext();
});

prevButton.addEventListener('click', () => {
    acaraSwiper.slidePrev();
});
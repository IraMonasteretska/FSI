$(document).ready(function () {
    // header line show
    const header = document.querySelector('.header');
    const menuItems = document.querySelectorAll('.header__nav > ul > li');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            header.classList.add('menu-hover');
        });

        item.addEventListener('mouseleave', () => {
            header.classList.remove('menu-hover');
        });
    });

    // switch
    const switchEl = document.getElementById('switch');
    const spans = document.querySelectorAll('.header__language span');

    switchEl.addEventListener('change', () => {
        spans.forEach(span => span.classList.toggle('hide'));
    });

    $('.has-submenu').hover(
        function () {
            $(this).find('.megamenu').addClass('is-open');
        },
        function () {
            $(this).find('.megamenu').removeClass('is-open');
        }
    );

    // events
    var swiper = new Swiper(".event-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        speed: 700,
        navigation: {
            // nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        // mousewheel: {
        //     enabled: true,
        //     sensitivity: 1,      
        //     releaseOnEdges: true
        // },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

})

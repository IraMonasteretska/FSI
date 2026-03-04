$(document).ready(function () {
    // header line show
    if ($(window).width() > 991) {
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
    }

    // switch
    const switchEl = document.getElementById('switch');
    const spans = document.querySelectorAll('.header__language span');

    switchEl.addEventListener('change', () => {
        spans.forEach(span => span.classList.toggle('hide'));
    });

    // menu
    function setupSubmenuBehavior() {
        $('.has-submenu').off('mouseenter mouseleave click');

        if ($(window).width() > 991) {
            $('.has-submenu').hover(
                function () {
                    $(this).find('.megamenu').addClass('is-open');
                },
                function () {
                    $(this).find('.megamenu').removeClass('is-open');
                }
            );
        } else {
            // $('.has-submenu').on('click', function (e) {
            //     e.preventDefault();
            //     $('.megamenu').removeClass('is-open');
            //     $('.has-submenu').removeClass('active');

            //     $(this).find('.megamenu').toggleClass('is-open');
            //     $(this).toggleClass('active');
            // });
            $('.has-submenu').on('click', function (e) {
                e.preventDefault();

                var $current = $(this);

                // Закриваємо всі інші, крім поточного
                $('.has-submenu').not($current).removeClass('active').find('.megamenu').removeClass('is-open');

                // Перемикаємо поточний
                $current.toggleClass('active');
                $current.find('.megamenu').toggleClass('is-open');
            });
        }
    }
    setupSubmenuBehavior();
    $(window).on('resize', function () {
        setupSubmenuBehavior();
    });

    // events slider
    var swiper = new Swiper(".event-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
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
            575: {
                slidesPerView: 1.8,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
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

    // megamenu structure
    $('.grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        horizontalOrder: true
    });

    // menu
    if ($('.burger2').length) {
        (function () {
            var burger2;
            burger2 = document.querySelector(".burger2");
            burger2.addEventListener("click", function () {
                return burger2.classList.toggle("on");
            });

        }).call(this);
    }

    $('.burger').click(function () {
        $('.header__nav').toggleClass('show');
        $('body').toggleClass('hidden');
        $('html, body').animate({ scrollTop: 0 }, 300);
    })


    // hero responsive
    $('.gethelp button').click(function () {
        $('.quickinfo').toggleClass('show')
    })
     $('.closebtn').click(function () {
        $('.quickinfo').removeClass('show')
    })

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.gethelp').length) {
            $('.quickinfo').removeClass('show')
        }
    });

    

    // accordeon 
    $('.hl-acc__header').on('click', function () {
        $('.hl-acc__header').not(this).removeClass('active');
        $('.hl-acc__body').not($(this).next()).slideUp();
        $(this).toggleClass('active');
        $(this).next('.hl-acc__body').slideToggle();

    });




})

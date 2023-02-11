/*swiper*/

var swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*tabs*/

document.querySelectorAll('.work__step').forEach(function (e) {

    e.addEventListener('click', function (el) {

        const tab = el.currentTarget.dataset.path;
        document.querySelectorAll('.tab-content').forEach(function (e) {

            e.classList.remove('tab-content--active')
            document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');

        })

    })

    /*Выделение активной кнопки*/

    e.addEventListener('click', function (el) {

        const tabDefault = el.currentTarget.dataset.default;
        document.querySelectorAll('.work__step').forEach(function (e) {

            e.classList.remove('work__steps--active')
            document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__steps--active');

        })

    })

})

/*accordiaon*/

$(function () {

    $("#accordion").accordion({

        collapsible: true,

    });

});

/*burger*/

let burger = document.querySelector('.burger');
let menuClose = document.querySelector('.menu-close');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

    function () {

        menu.classList.toggle('header__nav--active');
        document.body.classList.toggle('stop-scroll');

    }

)

menuClose.addEventListener('click',

    function () {

        menu.classList.remove('header__nav--active');

    }

)

menuLinks.forEach(function (el) {

    el.addEventListener('click', function () {

        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');

    })

})

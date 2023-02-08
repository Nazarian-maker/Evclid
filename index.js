/*swiper*/

var swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
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

})
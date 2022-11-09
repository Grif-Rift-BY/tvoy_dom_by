/* Кнопка прокрутки наверх */

$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 100);
        return false;
    });
});


/* Slick слайдер */

$(function() {
    $('.reviews__profile').slick();
});

/* Pop up */

let button = document.getElementById('open');
let close = document.getElementById('closed');

button.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = 'block';
});

close.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = 'none';
});

/* Burger menu  */

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.burger__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('burger__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('burger__nav_active');
    });
}());


/*
document.addEventListener('click', function (e) {
    if (e.target.classList.contains("quantity-controls-max")) {
        ++e.target.parentElement.querySelector("input[name='quantity']").value;
        plus(e.target.parentElement.parentElement);
    } else if (e.target.classList.contains("quantity-controls-min") && e.target.parentElement.querySelector("input[name='quantity']").value >1) {
        --e.target.parentElement.querySelector("input[name='quantity']").value;
        minus(e.target.parentElement.parentElement);
    } else if (e.target.classList.contains("product__list--button-by")) {
        e.target.parentElement.querySelector(".product__list--button-by").textContent = 'В корзине';
        e.target.parentElement.querySelector(".product__list--button-by").style.background = '#2dac18';
        document.querySelector('.basket-mini').textContent = e.target.parentElement.parentElement.parentElement.querySelector("input[name='quantity']").value;
        document.querySelector('.basket').setAttribute('title', 'Сумма: ' + e.target.parentElement.parentElement.parentElement.querySelector('.price').textContent + ' руб.');
    }
});
*/
var summa = 0;

for (var i = 0; i < document.querySelectorAll('.quantity-controls-max').length; i++) {
    document.querySelectorAll('.quantity-controls-max')[i].addEventListener('click', function (e) {
        plus(e.target.parentElement);
    });
}

for (var i = 0; i < document.querySelectorAll('.quantity-controls-min').length; i++) {
    document.querySelectorAll('.quantity-controls-min')[i].addEventListener('click', function (e) {
        minus(e.target.parentElement);
    });
}
for (var i = 0; i < document.querySelectorAll('.product__list--button-by').length; i++) {
    document.querySelectorAll('.product__list--button-by')[i].addEventListener('click', function (e) {
        this.textContent = 'В корзине';
        this.style.background = '#2dac18';
        document.querySelector('.basket-mini').classList.add('active');
        document.querySelector('.basket-mini').textContent = Number(document.querySelector('.basket-mini').textContent) + Number(e.target.parentElement.parentElement.parentElement.querySelector("input[name='quantity']").value);
        summa = summa + Number(e.target.parentElement.parentElement.parentElement.querySelector('.price').textContent = e.target.parentElement.parentElement.parentElement.querySelector('.price').getAttribute('value')  * Number(e.target.parentElement.parentElement.parentElement.querySelector("input[name='quantity']").value));
        document.querySelector('.basket').setAttribute('title', 'Сумма: ' + summa + ' руб.');
    });
}

var plus = function (number) {
    ++number.querySelector("input[name='quantity']").value;
    return  number.parentElement.querySelector('.price').textContent = number.parentElement.querySelector('.price').getAttribute('value')  * Number(number.querySelector("input[name='quantity']").value);
};

var minus = function (number) {
    if(number.querySelector("input[name='quantity']").value >1){
        --number.querySelector("input[name='quantity']").value;
        return  number.parentElement.querySelector('.price').textContent =  number.parentElement.querySelector('.price').textContent - number.parentElement.querySelector('.price').getAttribute('value');
    }
};

/* Слайдеры */
var swiper = new Swiper('.swiper-banner', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

var swiper1 = new Swiper('.swiper-product', {
    slidesPerView: 4,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.15,
            slidesPerGroup: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        },
        540: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetweenSlides: -30
        },
        750: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetweenSlides: -30
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetweenSlides: -30
        }
    }
});

/* Подвал */
var footerMenu = document.querySelectorAll('.footer__item--title');
 
var footerMenuClick = function (footerMenu) {
    footerMenu.addEventListener('click', function () {
        footerMenu.classList.toggle('active');
        footerMenu.nextElementSibling.classList.toggle('active');
    });
};

for (var i = 0; i < footerMenu.length; i++) {
    footerMenuClick(footerMenu[i]);
}

/* Навигация */
var headerMenuOpen = document.querySelector('.header__burger--mobile');
 
headerMenuOpen.addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('#menu-nav').classList.add('active');

});

var headerMenuClose = document.querySelector('.nav__menu', ':after');
 
headerMenuClose.addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('#menu-nav').classList.remove('active');
  
});

/* Показать еще */
var showMore = document.createElement('div');
showMore.classList.add('show-more');
showMore.textContent = 'Показать еще';

if( window.innerWidth <= 540 ){
    document.querySelector('.about__info--text').appendChild(showMore);

    var showMoreClick = document.querySelector('.show-more');

    showMoreClick.addEventListener('click', function () {
        this.parentElement.querySelector('.show-text').classList.add('active');
        this.remove(showMoreClick);
    
    });
} 


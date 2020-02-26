
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
        document.querySelector('.basket-mini').textContent = Number(document.querySelector('.basket-mini').textContent) + Number(e.target.parentElement.parentElement.parentElement.querySelector("input[name='quantity']").value);
        summa = summa + Number(e.target.parentElement.parentElement.parentElement.querySelector('.price').getAttribute('value'));
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




var swiper = new Swiper('.swiper-banner', {
    loop: true, 
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});


var swiper1 = new Swiper('.swiper-product', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

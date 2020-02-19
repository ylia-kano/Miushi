var plus = function(number){
    return  number.querySelector('.price').textContent = number.querySelector('.price').getAttribute('value')  * Number(number.querySelector("input[name='quantity']").value);
};

var minus = function(number){
    return  number.querySelector('.price').textContent =  number.querySelector('.price').textContent - number.querySelector('.price').getAttribute('value');
};

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

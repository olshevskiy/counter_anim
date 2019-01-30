let counter = document.querySelector('.counter'),
    btnPlus = document.querySelector('.counter__btn_plus'),
    btnMinus = document.querySelector('.counter__btn_minus'),
    counterField = document.querySelector('.counter__field'),
    oldValue,

    counterMinValue = 1;

btnPlus.addEventListener("click", function(){
    oldValue = parseFloat(counterField.value);
    if(!counter.classList.contains('active')){
        counter.classList.add('active');
    }
    else{
        counterField.value = oldValue + 1;
    }
});

btnMinus.addEventListener("click", function(){
    oldValue = parseFloat(counterField.value);
    if (oldValue <= counterMinValue) {
        counterField.value = oldValue;
    } else {
        counterField.value = oldValue - 1;
    }
});

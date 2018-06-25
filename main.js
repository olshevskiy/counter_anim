let counter = document.querySelector('.counter');
let btnPlus = document.querySelector('.counter__btn_plus');
let btnMinus = document.querySelector('.counter__btn_minus');
let counterField = document.querySelector('.counter__field');

let counterMinValue = 1;



btnPlus.addEventListener("click", function(){
    let oldValue = parseFloat(counterField.value);
    if(!counter.classList.contains('active')){
        counter.classList.add('active');
    }
    else{
        var newVal = oldValue + 1;
        counterField.value = newVal;
    }
});
btnMinus.addEventListener("click", function(){
    let oldValue = parseFloat(counterField.value);
    if (oldValue <= counterMinValue) {
        var newVal = oldValue;
    } else {
        var newVal = oldValue - 1;
        counterField.value = newVal;
    }
});

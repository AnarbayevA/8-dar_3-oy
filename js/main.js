var elForm = document.querySelector(".form")
var elInputNumber = document.querySelector(".form__input")
var elonFootResult_1 = document.querySelector(".header__result1")
var elonFootResult_2 = document.querySelector(".header__result2")
var elonFootResult_3 = document.querySelector(".header__result3")
var elonFootResult_4 = document.querySelector(".header__result4")
var elonFootResult_5 = document.querySelector(".header__result5")
var onFoot = 4; // km/soat
var running = 13; // km/soat
var byBicycle = 30; // km/soat
var byCar = 100; // km/soat
var Plain = 500; // km/soat


function peshkom(a,b) {
    return (a)/b
}
    
    elForm.addEventListener("submit", function(evt){
        evt.preventDefault();
        // ON FOOT
        elonFootResult_1.innerHTML = peshkom(elInputNumber.value,onFoot) + " soat"
        console.log(peshkom(elInputNumber.value,onFoot + " soat"));

        // RUNNING
        elonFootResult_2.innerHTML = peshkom(elInputNumber.value,running) + " soat"
        console.log(peshkom(elInputNumber.value,onFoot + " soat"));

        //BYBICYCLE
        elonFootResult_3.innerHTML = peshkom(elInputNumber.value,byBicycle) + " soat"
        console.log(peshkom(elInputNumber.value,onFoot + " soat"));

        //BYCAR
        elonFootResult_4.innerHTML = peshkom(elInputNumber.value,byCar) + " soat"
        console.log(peshkom(elInputNumber.value,onFoot + " soat"));

        //PLAIN
        elonFootResult_5.innerHTML = peshkom(elInputNumber.value,Plain) + " soat"
        console.log(peshkom(elInputNumber.value,onFoot + " soat"));

})





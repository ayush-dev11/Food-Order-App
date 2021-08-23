'use strict';

document.querySelector('.pizza').addEventListener('click', function() {
    document.querySelector('.para').classList.add("hide");
    document.querySelector('.pizza-order').classList.remove("hide");
    let x = document.querySelectorAll(".burger-order, .taco-order, .noodles-order, .gulab-jamun-order");
    for (let i = 0; i<x.length; i++) {
        x[i].classList.add("hide");
    }
    console.log("done");
})

document.querySelector('.taco').addEventListener('click', function() {

    document.querySelector('.para').classList.add("hide");
    document.querySelector('.taco-order').classList.remove("hide");
    let x = document.querySelectorAll(".pizza-order, .burger-order, .noodles-order, .gulab-jamun-order");
    for (let i = 0; i<x.length; i++) {
        x[i].classList.add("hide");
    }
    console.log("done");


});


document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.para').classList.add("hide");
    document.querySelector('.burger-order').classList.remove("hide");
    let x = document.querySelectorAll(".pizza-order, .taco-order, .noodles-order, .gulab-jamun-order");
    for (let i = 0; i<x.length; i++) {
        x[i].classList.add("hide");
    }
    console.log("done");

});

document.querySelector('.noodles').addEventListener('click', function() {
    document.querySelector('.para').classList.add("hide");
    document.querySelector('.noodles-order').classList.remove("hide");
    let x = document.querySelectorAll(".pizza-order, .taco-order, .burger-order, .gulab-jamun-order");
    for (let i = 0; i<x.length; i++) {
        
        x[i].classList.add("hide");
        
    }
    console.log("done");

} )

document.querySelector('.gulab-jamun').addEventListener('click', function() {
    document.querySelector('.para').classList.add("hide");
    document.querySelector('.gulab-jamun-order').classList.remove("hide");
    let x = document.querySelectorAll(".pizza-order, .taco-order, .noodles-order, .burger-order");
    for (let i = 0; i<x.length; i++) {
        x[i].classList.add("hide");
    }
    console.log("done");

})

document.querySelector('.butLog').addEventListener('click', function() {
    window.location.href="/login.html";
    console.log("butLog clicked");
})




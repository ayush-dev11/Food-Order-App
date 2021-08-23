'use strict'

document.querySelector('.btn').addEventListener('click', function() {
    document.querySelector('.div-class').classList.add('hide');
    document.querySelector('.this').classList.remove('hide');
})
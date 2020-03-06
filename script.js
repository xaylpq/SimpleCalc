window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;
    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;

        if (restDays.value == '' || persons.value == '') {
            total = 0;
        } else {
            total = (daysSum + personsSum) * 8000;
        }

        if(restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }

    });

    restDays.addEventListener('change', function() { 
        daysSum = +this.value;

        if (restDays.value == '' || persons.value == '') {
            total = 0;
        } else {
            total = (daysSum + personsSum) * 8000;
        }

        if(persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        if (restDays == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

});
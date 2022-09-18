"use strict";

const bill = document.getElementById('bill');
const num_people = document.querySelector('#people');
const custom = document.querySelector('.button__customPercentage'); 
const resetButton = document.querySelector('.calculator__reset');

// text inputs in widow 
const tipAmount = document.querySelector('.calculator__tipValue');
const totalSum = document.querySelector('.calculator__totalValue');

const button_grid = document.querySelector('.button');

//All inputs in .button class -> button__items - HTML Collection
const button__item = document.querySelectorAll('.button>input');


function removeActive() {
  // function that removes class active from ALL..button children and button
  [].forEach.call(button__item, function(el) {
    el.classList.remove('active');
    button_grid.classList.remove('active');
  });
}

document.addEventListener('input', function(e) {
// calling calulation function after INPUT event
  calculation();
});

button_grid.addEventListener('click', function(e) {num_people
// calling function that removes class active from ALL..button children
  removeActive();

// asigning class active to current  //find better solution
  e.target.classList.add('active');
  
// calling calulation function after CLICK event
  calculation();
});

function calculation() {
  let billValue = bill.value;
  let peopleToSplit = num_people.value;
  
  const buttonActive = document.getElementsByClassName('active')[0];
  
  const isActive = Array.from(document.getElementsByClassName("button__item")).some(({classList}) => classList.contains('active'));
// zero value if one of conditions not allow for callculation
  if (billValue == '' || isActive === false || peopleToSplit == '' || parseInt(peopleToSplit) <= 0 || parseFloat(billValue) <= 0 || parseInt(custom.value) <= 0 || Number.isInteger(parseFloat(peopleToSplit)) === false) {
    tipAmount.textContent = '$'+ '0.00';
    totalSum.textContent = '$'+ '0.00';

  } else {
    let tip;

    if (buttonActive.value.includes('%')) {

      tip = parseFloat((buttonActive.value).replace('%',''));
      
    } else {

      tip = parseFloat(buttonActive.value);
    }

    let tipValue = billValue * tip * 0.01;

    tipAmount.textContent = '$' + (tipValue / parseFloat(peopleToSplit)).toFixed(2);
    
    totalSum.textContent = '$' + ((parseFloat(billValue) + tipValue ) / parseFloat(peopleToSplit)).toFixed(2);
  }
 }


//RESET Button
resetButton.addEventListener('click', function() {
  // removing inputs value 
  const el = document.getElementsByTagName('input');
  for (let i=0; i < el.length; i++) {
    if (el[i].type == 'number') {
      el[i].value = "";
    }
  };
  // removing active class from .button__grid
  removeActive();
  // zero value for results
  totalSum.textContent = '$0.00'
  tipAmount.textContent = '$0.00'

});

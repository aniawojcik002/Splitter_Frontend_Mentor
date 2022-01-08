"use strict";

const bill = document.getElementById('bill');
const num_people = document.querySelector('#people');
const custom = document.querySelector('.button__customPercentage'); 
const resetButton = document.querySelector('.calculator__reset');
// text inputs in widow 
const tipAmount = document.querySelector('.calculator__tipValue');
const totalSum = document.querySelector('.calculator__totalValue');

const button_grid = document.querySelector('.button');
// -----------------------------------------------------
//All inputs in .button class -> button__items - HTML Collection
const button__item = document.querySelectorAll('.button>input');
// -----------------------------------------------
function removeActive() {
  // function that removes class active from ALL..button children
  [].forEach.call(button__item, function(el) {
    el.classList.remove('active');
    button_grid.classList.remove('active');
  });
}

document.addEventListener('input', function(e) {
  // calling calulation function after INPUT event
  // console.log(bill.value);
  calculation();
  // console.log(typeof(parseFloat(bill.value)));

});

button_grid.addEventListener('click', function(e) {
// calling function that removes class active from ALL..button children
  removeActive();
// asigning class active to current target
  e.target.classList.add('active'); //to develop better solution, now it's adding active class to parent element 

// calling calulation function after CLICK event
  calculation();
});

function calculation() {
  let billValue = bill.value;
  let peopleValue = num_people.value;
  
  const buttonActive = document.getElementsByClassName('active')[0];


  const isActive = Array.from(document.getElementsByClassName("button__item")).some(({classList}) => classList.contains('active'));

  if (billValue == '' || isActive === false || peopleValue == '' || parseInt(peopleValue) <= 0 || parseFloat(billValue) <= 0 || parseInt(custom.value) <= 0) {
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

    tipAmount.textContent = '$' + (tipValue / parseInt(peopleValue)).toFixed(2);
    
    totalSum.textContent = '$' + ((parseFloat(billValue) + tipValue ) / parseInt(peopleValue)).toFixed(2);
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






































// COPY 
// function billValue() {
//   bill.addEventListener("input", function (e) {
//     const bill_val = Number(bill.value).toFixed(2);
//     console.log(bill.value); // bill_value = bill.value;
//     tipValue.innerHTML = '$'+ bill.value;
//     // return this.bill_val;
//   }) 
// }
// billValue();



//   COPY
// ----------------------------------------------
// Event listener dla rodzica button__item
// document.querySelector('.button').addEventListener('click', function(e) {
//   // ------------------------------------------------
//   // 1.usuniecie klasy active dla wszystkich dzieci button
//   // 2. dodanie klasy clicked dla kliknietego
//   [].forEach.call(button__item, function(el) {
//     el.classList.remove("active");
//   });
  
//   e.target.classList.add("active");
//   // ----------------it's working above----------------

// });
  

    // console.log(tip);
    
    // || Array.from(document.getElementsByClassName("button__item")).some(({classList}) => classList.contains('active')) == false
  // if (Array.from(document.getElementsByClassName("button__item")).some(({classList}) => classList.contains('active')) === true) {
  //   console.log('active jest');
  //   // const tip = parseFloat((document.getElementsByClassName('active')[0].value).slice(0,-1));
  //   // console.log(`tip klinkiety wartosc wynosi ${tip}`);
  // } else {
  //   console.log('nie kliknieto wartosci tipa');
  // };
  // bind 

// function calculate(tip_val) {
//   // if custom have value ---error if another button is clicked 
//   // jesli custom nie zawiera klasy active formula nie poprawna  
  
//   // tipValue.innerHTML = '$' + ((parseFloat(bill.value) * tip_val * 0.01 ) /parseInt(num_people.value)).toFixed(2);
  
  
//   // console.log(tip_val.typeOf);
//   console.log(tip_val);
//   return tip_val;
// }
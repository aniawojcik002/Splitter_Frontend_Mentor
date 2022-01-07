"use strict";

const bill = document.getElementById('bill');
const num_people = document.querySelector("#people");
const custom = document.querySelector(".button__customPercentage"); 
const reset = document.querySelector(".calculator__reset");
// text inputs in widow 
const tipValue = document.querySelector('.calculator__tipValue');
const totalValue = document.querySelector('.calculator__totalValue');

const button_grid = document.querySelector('.button');
// -----------------------------------------------------
//All inputs in .button class -> button__items - HTML Collection
const button__item = document.querySelectorAll(".button>input");
// -----------------------------------------------



document.addEventListener('input', function(e) {
// calling calulation function after INPUT event
  calculation(); 
});

button_grid.addEventListener('click', function(e) {
  
// removing class active from ALL..button children
  [].forEach.call(button__item, function(el) {
    el.classList.remove("active");
    button_grid.classList.remove("active");
  });
// asigning class active to current target
  e.target.classList.add("active"); //to develop better solution, now it's adding active class to parent element 

  // ------------------------
// calling calulation function after CLICK event
  calculation();
});


function calculation() {
  let billValue = bill.value;
  let peopleValue = num_people.value;
  let customValue = custom.value;
  const buttonActive = document.getElementsByClassName('active')[0];

  const isFalse = Array.from(document.getElementsByClassName("button__item")).some(({classList}) => classList.contains('active'));

  if (billValue == '' || isFalse === false || peopleValue == '') {
    tipValue.innerHTML = '$'+ '0.00';
    // console.log('nie wszystkie pola uzupełnione')
  } else {
    let tip;

    if (buttonActive.value.includes('%')) {
      tip = parseFloat((buttonActive.value).replace('%',''));
      
    } else {
      tip = parseFloat(buttonActive.value);
    }

    tipValue.innerHTML = '$' + ((parseFloat(bill.value) * tip * 0.01 ) /parseInt(num_people.value)).toFixed(2);
  }
 }







































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
let billValue = document.querySelector('#bill');
let fiveBtn = document.querySelector('.five'); 
let tenBtn = document.querySelector('.ten');
let fifteenBtn = document.querySelector('.fifteen');
let twentyFiveBtn = document.querySelector('.twenty-five');
let fiftyBtn = document.querySelector('.fifty');
let custom = document.querySelector('#custom');
let customValue;
let resetBtn = document.querySelector('.reset');

let total = document.querySelector('.total');
let amount = document.querySelector('.amount');
let people = document.querySelector('#people');
let peopleZero = document.querySelector('.people-num>span');

function calc(btnNum){

  billValue = parseInt(billValue.value);
  people = parseInt(people.value);
  billValue = (billValue * btnNum) / 100;
  
  total.innerHTML = "$" + " " + billValue;

    if(people == 0){
      peopleZero.style.display = 'flex';
    }else{  
    amount.innerHTML = "$" + " " + billValue / people;
    }
    resetBtn.style.color="hsl(186, 14%, 43%)";
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";

}


fiveBtn.addEventListener('click', function(){
      calc(5);
});
tenBtn.addEventListener('click', function(){
      calc(10);
});
fifteenBtn.addEventListener('click', function(){
      calc(15);
});
twentyFiveBtn.addEventListener('click', function(){
      calc(25);
});
fiftyBtn.addEventListener('click', function(){
      calc(50);
});

/* 

fiveBtn.addEventListener('click', function(){
    billValue = parseInt(billValue.value);
    people = parseInt(people.value);
    billValue = (billValue * 5) / 100;
  
    total.innerHTML = "$" + " " + billValue;

    if(people == 0){
      peopleZero.style.display = 'flex';
    }else{
    amount.innerHTML = "$" + " " + billValue / people;
    }
    resetBtn.style.color="hsl(186, 14%, 43%)";
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
});

tenBtn.addEventListener('click', function(){
  billValue = parseInt(billValue.value);
  people = parseInt(people.value);
  billValue = (billValue * 10) / 100;

  total.innerHTML = "$" + " " + billValue;
  if(people == 0){
    peopleZero.style.display = 'flex';
  }else{
  amount.innerHTML = "$" + " " + billValue / people;
  }
  resetBtn.style.color="hsl(186, 14%, 43%)";
  resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
});

fifteenBtn.addEventListener('click', function(){
  billValue = parseInt(billValue.value);
  people = parseInt(people.value);
  billValue = (billValue * 15) / 100;

  total.innerHTML = "$" + " " + billValue;

  if(people == 0){
    peopleZero.style.display = 'flex';
  }else{
  amount.innerHTML = "$" + " " + billValue / people;
  }
  resetBtn.style.color="hsl(186, 14%, 43%)";
  resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
});

twentyFiveBtn.addEventListener('click', function(){
  billValue = parseInt(billValue.value);
  people = parseInt(people.value);
  billValue = (billValue * 25) / 100;

  total.innerHTML = "$" + " " + billValue;

  if(people == 0){
    peopleZero.style.display = 'flex';
  }else{
  amount.innerHTML = "$" + " " + billValue / people;
  }
  resetBtn.style.color="hsl(186, 14%, 43%)";
  resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
});

fiftyBtn.addEventListener('click', function(){
  billValue = parseInt(billValue.value);
  people = parseInt(people.value);
  billValue = (billValue * 50) / 100;
  
  total.innerHTML = "$" + " " + billValue;
  if(people == 0){
    peopleZero.style.display = 'flex';
  }else{
  amount.innerHTML = "$" + " " + billValue / people;
  }
  resetBtn.style.color="hsl(186, 14%, 43%)";
  resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
});
*/
 custom.addEventListener('keyup', function(e){
  e.preventDefault();
  if(e.keyCode == 13){
    customValue = parseInt(e.target.value);
    billValue = parseInt(billValue.value);
    people = parseInt(people.value);
    billValue = (billValue * customValue) / 100;
    total.innerHTML = "$" + " " + billValue;

    if(people == 0){
      peopleZero.style.display = 'flex';
    }else{
    amount.innerHTML = "$" + " " + billValue / people;
    }
    resetBtn.style.color="hsl(186, 14%, 43%)";
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
  }
}); 


let form = document.querySelector('.form');
resetBtn.addEventListener('click', function(){
  window.location.reload();
});
 
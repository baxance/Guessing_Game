'use strict'

let knowledge = 0

function greeting() {
let userName = prompt('What\'s your name?');
    alert('Hows it going, ' + userName + '. I have a few questions before we can continue.');{
      document.write('<h3>' + 'Farewell, ' + userName + '</h3>');
    }
  }

greeting();


function question1(){
let myName = prompt('Yes or no: Is my first name Barrett?').toUpperCase();
  if (myName === 'YES'){
    alert('That\'s correct. Are you a wizard?')
    knowledge++ // +1 
  }
  else if (myName === 'NO'){
    alert('How did you get this wrong?')
  }
  else if ((myName !== 'YES') && (myName !== 'NO')){
    alert('It\'s a Yes or No question. Anyway, moving on...')
  }
}

question1();


function question2(){
let home = prompt('Yes or no: Am I from California?').toUpperCase();
  if (home === 'NO'){
    alert('That\'s right, I\'m Kamaʻāina')
    knowledge++ // +1
  }
  else if (home === 'YES'){
    alert('Come on now. Hawai\'i boy through and through.')
  }
  else if ((home !== 'YES') && (home !== 'NO')){
    alert('It\'s a Yes or No question. Anyway, moving on...')
  }
}

question2();


function question3(){
let gojira = prompt('Yes or No: Biollante is the coolest Godzilla villain.').toUpperCase();
  if (gojira === 'YES'){
    alert('You have good taste. I bet a patrician of your caliber dislikes the American Godzillas too')
    knowledge++ 
  } 
  else if (gojira === 'NO'){
    alert('I bet you prefer Showa era Godzilla. That\'s a good pick too, no worries.')
  }
  else if ((gojira !== 'YES') && (gojira !== 'NO')){
    alert('Are you deliberately not using a yes or no answer?')
  }
}

question3();


function question4(){
let cat = prompt('Yes or No: Cats are better than Dogs').toUpperCase();
  if (cat === 'YES'){
    alert('"How can one choose!" say some. As easily as you did, says I')
    knowledge++
  }
  else if(cat === 'NO'){
    alert('meh. dogs are alright too I guess')
  }
  else if((cat !== 'YES') && (cat !== 'NO')){
    alert('Indecision is acceptable in this case.')
  }
}

question4();

function question5(){
let hoc = prompt('Yes or No: The Seattle hockey team should have been the Sockeyes').toUpperCase();
  if (hoc === 'YES'){
    alert('Glad we\'re in agreement. Kraken is a ridiculously stupid name.')
    knowledge++
  }
  else if (hoc === 'NO'){
    alert('You mean Yes, right?')
  }
  else if ((hoc !== 'YES') && (hoc !== 'NO')){
    alert('I assume you don\'t like hockey. That\'s fine.')
  }
}

question5();

function guessingGame(){
let i = 0
let cohort = 107
for (i = 0; i < 4; i++){
let guess = prompt('In what year BC did Gaius Marius reform the Roman military into the Cohort system, replacing the Maniple?');
  if (guess == 107){
    alert('Correct! And though these measures saved Rome they would spell the demise of the Republic')
    knowledge++
    break;
  }
    if (guess < 107){
      alert('Too low, try again')
    }
    else if (guess > 107){
      alert('Too high, try again?')   
    }    
  }
}

guessingGame();


function guessMush(){
var tryMush = 0
let arrayOfMush = [
  'SHIITAKE',
  'CHANTERELLE',
  'MAITAKE',
  'OYSTER',
  'ENOKI' 
  ]
for (let i = 0; i < 6; i++){
  let guessMush = prompt('What is one of my favorite kinds of mushrooms?').toUpperCase()
  tryMush++;
  for (let j = 0; j < arrayOfMush.length; j++){
    if (guessMush === arrayOfMush[j]){
      alert('That\'s right!')
      knowledge++
      i=10;
      break;
    }
  }
}



alert('It took you ' + tryMush + ' tries. Some of my favorite mushrooms are:')

alert(arrayOfMush)
}

guessMush();

alert('You got ' + knowledge + ' right out of 7')

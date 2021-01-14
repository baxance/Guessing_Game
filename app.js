'use strict'

let knowledge = 0 // tally up correct answers


let userName = prompt('What\'s your name?');
  // console.log('Hows it going, ' + userName + '. I have a few questions before we can continue.');
    alert('Hows it going, ' + userName + '. I have a few questions before we can continue.');{
      document.write('<h3>' + 'Farewell, ' + userName + '</h3>');
    }

let myName = prompt('Yes or no: Is my first name Barrett?').toUpperCase();
  if (myName === 'YES'){
    // console.log('That\'s correct. Are you a wizard?');
    alert('That\'s correct. Are you a wizard?')
    knowledge++ // +1 
  }
  else if (myName === 'NO'){
    // console.log('How did you get this wrong?')
    alert('How did you get this wrong?')
  }
  else if ((myName !== 'YES') && (myName !== 'NO')){
    // console.log('It\'s a Yes or No question. Anyway, moving on...')
    alert('It\'s a Yes or No question. Anyway, moving on...')
  }

let home = prompt('Yes or no: Am I from California?').toUpperCase();
  if (home === 'NO'){
    // console.log('That\'s right, I\'m Kamaʻāina')
    alert('That\'s right, I\'m Kamaʻāina')
    knowledge++ // +1
  }
  else if (home === 'YES'){
    // console.log('Come on now. Hawai\'i boy through and through.')
    alert('Come on now. Hawai\'i boy through and through.')
  }
  else if ((home !== 'YES') && (home !== 'NO')){
    // console.log('It\'s a Yes or No question. Anyway, moving on...')
    alert('It\'s a Yes or No question. Anyway, moving on...')
  }

let gojira = prompt('Yes or No: Biollante is the coolest Godzilla villain.').toUpperCase();
  if (gojira === 'YES'){
    // console.log('You have good taste. I bet a patrician of your caliber dislikes the American Godzillas too')
    alert('You have good taste. I bet a patrician of your caliber dislikes the American Godzillas too')
    knowledge++ 
  } 
  else if (gojira === 'NO'){
    // console.log('I bet you prefer Showa era Godzilla. That\'s a good pick too, no worries.')
    alert('I bet you prefer Showa era Godzilla. That\'s a good pick too, no worries.')
  }
  else if ((gojira !== 'YES') && (gojira !== 'NO')){
    // console.log('Are you deliberately not using a yes or no answer?')
    alert('Are you deliberately not using a yes or no answer?')
  }

let cat = prompt('Yes or No: Cats are better than Dogs').toUpperCase();
  if (cat === 'YES'){
    // console.log('/"How can one choose!/" say some. As easily as you did, says I')
    alert('"How can one choose!" say some. As easily as you did, says I')
    knowledge++
  }
  else if(cat === 'NO'){
    // console.log('meh. dogs are alright too I guess')
    alert('meh. dogs are alright too I guess')
  }
  else if((cat !== 'YES') && (cat !== 'NO')){
    // console.log('Indecision is acceptable in this case.')
    alert('Indecision is acceptable in this case.')
  }

let hoc = prompt('Yes or No: The Seattle hockey team should have been the Sockeyes').toUpperCase();
  if (hoc === 'YES'){
    // console.log('Glad we\'re in agreement. Kraken is a ridiculously stupid name.')
    alert('Glad we\'re in agreement. Kraken is a ridiculously stupid name.')
    knowledge++
  }
  else if (hoc === 'NO'){
    // console.log('You mean Yes, right?')
    alert('You mean Yes, right?')
  }
  else if ((hoc !== 'YES') && (hoc !== 'NO')){
    // console.log('I assume you don\'t like hockey. That\'s fine.')
    alert('I assume you don\'t like hockey. That\'s fine.')
  }

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

alert('You got ' + knowledge + ' right out of 7')
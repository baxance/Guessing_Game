'use strict'

let userName = prompt('What\'s your name?');
    alert('Hows it going, ' + userName + '. I have a few questions before we can continue.');{
      document.write('<h3>' + 'Farewell, ' + userName + '</h3>');
    }

let nameQ = prompt('Yes or no: Is my first name Barrett?');
let nameA = nameQ.toUpperCase();
  if (nameA === 'YES'){
    alert('That\'s correct. Are you a wizard?')
  }
  else if (nameA === 'NO'){
    alert('How did you get this wrong?')
  }
  else if ((nameA !== 'YES') && (nameA !== 'NO')){
    alert('It\'s a Yes or No question. Anyway, moving on...')
  }

let homeQ = prompt('Yes or no: Am I from California?');
let homeA = homeQ.toUpperCase();
  if (homeA === 'NO'){
    alert('That\'s right, I\'m Kamaʻāina')
  }
  else if (homeA === 'YES'){
    alert('Come on now. Hawai\'i boy through and through.')
  }
  else if ((homeA !== 'YES') && (homeA !== 'NO')){
    alert('It\'s a Yes or No question. Anyway, moving on...')
  }

let gojiraQ = prompt('Yes or No: Biollante is the coolest Godzilla villain.');
let gojiraA = gojiraQ.toUpperCase();
  if (gojiraA === 'YES'){
    alert('You have good taste. I bet a patrician of your caliber dislikes the American Godzillas too')
  } 
  else if (gojiraA === 'NO'){
    alert('I bet you prefer Showa era Godzilla. That\'s a good pick too, no worries.')
  }
  else if ((gojiraA !== 'YES') && (gojiraA !== 'NO')){
    alert('Are you deliberately not using a yes or no answer?')
  }

let catQ = prompt('Yes or No: Cats are better than Dogs');
let catA = catQ.toUpperCase();
  if (catA === 'YES'){
    alert('/"How can one choose!/" say some. As easily as you did, says I')
  }
  else if(catA === 'NO'){
    alert('meh. dogs are alright too I guess')
  }
  else if((catA !== 'YES') && (catA !== 'NO')){
    alert('Indecision is acceptable in this case.')
  }

let hocQ = prompt('Yes or No: The Seattle hockey team should have been the Sockeyes');
let hocA = hocQ.toUpperCase();
  if (hocA === 'YES'){
    alert('Glad we\'re in agreement. Kraken is a ridiculously stupid name.')
  }
  else if (hocA === 'NO'){
    alert('You mean Yes, right?')
  }
  else if ((hocA !== 'YES') && (hocA !== 'NO')){
    alert('I assume you don\'t like hockey. That\'s fine.')
  }
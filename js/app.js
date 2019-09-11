/* eslint-disable indent */
'use strict';

var username = prompt('What is your name?');
alert('Hello ' + username + ' welcome to my about me page! First lets do a quick test to see how well you know me.');
console.log('uesername has entered test');

var blue = prompt('Do I like blue?');

blue = blue.toLowerCase();

if(blue === 'yes' || blue === 'y'){
  alert('Indeed I do, I aslo like pink and green');
  console.log('answer was correct');
} else
{alert('Oops! I love blue, good try');
  console.log('answer was incorrect');
}


var cat = prompt('Do I have a cat?');
cat = cat.toLowerCase();

if(cat === 'yes' || cat === 'y'){
  alert('Cats are great and right now I only have one');
  console.log('correct answer for cat question');
}else{
  alert('Turns out I have a cat. She is a  cutie and I spoil her');
}

var fun = prompt('Do I only play one video game?');
fun = fun.toLowerCase();

if(fun === 'yes' || fun==='y'){
  alert('That is right! I only ever play don/t starve with the DLC shipwrecked');
  console.log('One game to rule them all');
}else{
  alert('It is just the one game actually. Cause I am weird like that.');
  console.log('They thought I was deverse with my game play');
}

var sleep = prompt('Do I love sleeping in and nap taking?');
sleep = sleep.toLowerCase();

if(sleep === 'yes' || sleep === 'y'){
  alert('Sleep is the best and I LOVE it');
  console.log('sleep is bae');
}else{
  alert('Oops! Thank you for thinking that I am not a human sloth, but unfortunatly I am');
  console.log('I am sloth');
}

var food = prompt('Do I like to bake and cook?');
food = food.toLowerCase();
if(food === 'yes' || food === 'y'){
  alert('Me tooI have been cooking and baking since I was three!');
  console.log('I think ' + username + ' wants me to feed them now');
}else{
  alert('Nope. I do cook and bake. It relaxes me.');
  console.log('I hate doing dishes though');
}

//loop to run so that they can guess 6
var guess = 0;
while(guess < 4) {
  var number = parseInt(prompt('Can you guess my favorite number?'));
  if(number === 6){
    alert('Great job!');
    break;
  } else if(number < 6) {
    alert('That number is too small. Try again.');
    guess++;
  } else if(number > 6) {
    alert('That number is too big. Try again.');
    guess++;
    }
}
if (guess === 4){
  alert('The correct answer is 6. Better luck next time.');
}

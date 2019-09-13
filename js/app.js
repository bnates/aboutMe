/* eslint-disable indent */
'use strict';
var pointTotal = 0;
var username;
function user (){
  username = prompt('What is your name?');
    alert('Hello ' + username + ' welcome to my about me page! First lets do a quick test to see how well you know me.');
    console.log('uesername has entered test');
    color();
}
function color (){
  var blue = prompt('Do I like blue?');

<<<<<<< HEAD
  blue = blue.toLowerCase();

=======
var username = prompt('What is your name?');
alert('Hello ' + username + ' welcome to my about me page! First lets do a quick test to see how well you know me.');
console.log('uesername has entered test');


var blue = prompt('Do I like blue?');
blue = blue.toLowerCase();
function color(){
>>>>>>> 6b0a7991431a25410ae012f6772402246776456e
  if(blue === 'yes' || blue === 'y'){
    alert('Indeed I do, I also like pink and green');
    console.log('answer was correct');
    pointTotal++;
<<<<<<< HEAD
  } else
  {alert('Oops! I love blue, good try');
  console.log('answer was incorrect');
}
pet();
}

function pet(){
  var cat = prompt('Do I have a cat?');
  cat = cat.toLowerCase();

=======
  }else{
    alert('Oops! I love blue, good try');
    console.log('answer was incorrect');
  }
  pet();
}
var cat = prompt('Do I have a cat?');
cat = cat.toLowerCase();
function pet(){
>>>>>>> 6b0a7991431a25410ae012f6772402246776456e
  if(cat === 'yes' || cat === 'y'){
    alert('Cats are great and right now I only have one');
    console.log('correct answer for cat question');
    pointTotal++;
  }else{
    alert('Turns out I have a cat. She is a  cutie and I spoil her');
  }
  time();
}
<<<<<<< HEAD


function time(){
  var fun = prompt('Do I only play one video game?');
  fun = fun.toLowerCase();

  if(fun === 'yes' || fun==='y'){
    alert('That is right! I only ever play don/t starve with the DLC shipwrecked');
=======
var fun = prompt('Do I only play one video game?');
fun = fun.toLowerCase();
function time(){
  if(fun === 'yes' || fun==='y'){
    alert('That is right! I only ever play don\'t starve with the DLC shipwrecked');
>>>>>>> 6b0a7991431a25410ae012f6772402246776456e
    console.log('One game to rule them all');
    pointTotal++;
  }else{
    alert('It is just the one game actually. Cause I am weird like that.');
    console.log('They thought I was diverse with my game play');
  }
  rest();
}
<<<<<<< HEAD

function rest(){
  var sleep = prompt('Do I love sleeping in and nap taking?');
  sleep = sleep.toLowerCase();

=======
var sleep = prompt('Do I love sleeping in and nap taking?');
sleep = sleep.toLowerCase();
function rest(){
>>>>>>> 6b0a7991431a25410ae012f6772402246776456e
  if(sleep === 'yes' || sleep === 'y'){
    alert('Sleep is the best and I LOVE it');
    console.log('sleep is bae');
    pointTotal++;
  }else{
    alert('Oops! Thank you for thinking that I am not a human sloth, but unfortunately I am');
    console.log('I am sloth');
  }
<<<<<<< HEAD
  nomnom();
}

function nomnom(){
  var food = prompt('Do I like to bake and cook?');
  food = food.toLowerCase();
  if(food === 'yes' || food === 'y'){
    alert('I have been cooking and baking since I was three!');
    console.log('I think ' + username + ' wants me to feed them now');
    pointTotal++;
=======
  grub();
}
var food = prompt('Do I like to bake and cook?');
food = food.toLowerCase();
function grub(){
  if(food === 'yes' || food === 'y'){
    alert('I have been cooking and baking since I was three!');
    console.log('I think ' + username + ' wants me to feed them now');
>>>>>>> 6b0a7991431a25410ae012f6772402246776456e
  }else{
    alert('Nope. I do cook and bake. It relaxes me.');
    console.log('I hate doing dishes though');
  }
<<<<<<< HEAD
  mindReader();
}

function mindReader(){
  var guess = 0;
  var isCorrect = false;
  while(guess <= 4 && !isCorrect) {
=======
  mind();
}




//loop to run so that they can guess 6
var guess = 0;
var isCorrect = false;
function mind(){
  while(guess <= 4 && !isCorrect){
>>>>>>> 6b0a7991431a25410ae012f6772402246776456e
    var number = parseInt(prompt('Can you guess my favorite number?'));
    if(number === 6){
      alert('Great job!');
      console.log('Wonderful');
      isCorrect = true;
      pointTotal++;
    } else if(number < 6) {
      alert('That number is too small. Try again.');
      console.log('Guess again');
      guess++;
    } else if(number > 6) {
      alert('That number is too big. Try again.');
      console.log('Numbers are cool');
      guess++;
    } else{
      alert('please enter a number');
<<<<<<< HEAD
      console.log('User didn\'t understand the question');
=======
      console.log('User didnt understand the question');
>>>>>>> 6b0a7991431a25410ae012f6772402246776456e
      guess++;
    }
  }
  if (guess === 4){
    alert('The correct answer is 6. Better luck next time.');
    console.log('We cant always be right. But that would be kinda nice');
  }
<<<<<<< HEAD
  multiple();
}

function multiple(){
  var answer = 0;
  var petname = ['munchkin', 'munchbutt', 'munchies', 'munchinator', 'bratcat'];
  var gotName = false;
=======
  catName();
}


var answer = 0;
var petname = ['munchkin', 'munchbutt', 'munchies', 'munchinator', 'bratcat'];
var gotName = false;
function catName(){
>>>>>>> 6b0a7991431a25410ae012f6772402246776456e
  while(answer <= 5 && !gotName){
    var petquestion = prompt('Can you guess what I call my cat?').toLowerCase();
    for(var i = 0; i< petname.length; i++){
      if (petquestion === petname[i]){
        console.log('I have many names for my cat');
        gotName = true;
        i = petname.length;
        pointTotal++;
      }
    }
    if (!gotName){
        alert('You failed! Try again or i wont show you cat pictures');
        answer++;
      } else if (gotName){
        alert('You did it!');
      }
    }
<<<<<<< HEAD
    }
    total();
}
function total(){
  alert('All done ' + username + ' you got ' + pointTotal + ' out of 7');
  console.log('Tests are best when the points don\'t matter');
}
user();
//code by roz
=======
    alert('All done you got ' + pointTotal + ' out of 7');
    console.log('Tests are best when the points dont matter');
  }
  color();
  
>>>>>>> 6b0a7991431a25410ae012f6772402246776456e

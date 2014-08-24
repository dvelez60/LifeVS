function SoundLoader(){

/*******************

 sounds - 
  1. menu click
  2. unit place
  3. unit eat
  4. ~unit create destroy~ 
  5. game win
  6. game over

*******************/

 this.click = new Audio();
 this.click.src = jsfxr([0,,0.1879,,0.1802,0.3063,,,,,,,,0.2782,,,,,1,,,0.1,,0.5]);
 
 this.place = new Audio();
 this.place.src = jsfxr([  0,,0.0329,0.3467,0.1802,0.8847,,,,,,,,,,,,,1,,,,,0.5]);

 this.eat = new Audio();
 this.eat.src = jsfxr([3,,0.0947,,0.1567,0.4543,,-0.4642,,,,,,,,,,,1,,,0.0313,,0.5]);

 this.uCreate = new Audio();
 this.uCreate.src = jsfxr([0,,0.0329,0.3467,0.1802,0.8847,,,,,,,,,,,,,1,,,,,0.5]);
 /// or 0,,0.0329,0.3467,0.1802,0.8847,,,,,,,,,,,,,1,,,,,0.5
 this.win = new Audio();
 this.win.src = jsfxr([1,,0.3062,,0.2881,0.4335,,0.3068,,,,,,,,0.4938,,,1,,,,,0.5]);

 this.lose = new Audio();
 this.lose.src = jsfxr([3,,0.3838,0.7365,0.3396,0.0597,,,,,,,,,,0.4237,-0.2412,-0.1652,1,,,,,0.5]);

 this.startMusic = function(){

  var mus = new Audio();
  mus.src = "bgMusic.mp3";
  mus.play();
  console.log("nananananana");

 };

 this.mute = function(){

  this.click.muted = true;
  this.place.muted = true;
  this.eat.muted = true;
  this.uCreate.muted = true;
  this.win.muted = true;   
  this.lose.muted = true;
  muted = true;

 };

 this.unMute = function(){

  this.click.muted = false;
  this.place.muted = false;
  this.eat.muted = false;
  this.uCreate.muted = false;
  this.win.muted = false;   
  this.lose.muted = false;
  muted = false;

 };

};

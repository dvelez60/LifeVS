/// conected world *__*  O___o   :O  *****O:

/* canvases 

 can+ctx = "bg"
 pcan+pctx = "player"
 bcan+bctx = "bound" ----- filled squares
 uican+uictx = "ui"
 gcan+gctx = "grid"
 ecan+ectx = "enemy"

*/

var can, ctx, pcan, pctx, bcan, bctx, uican, uictx, ecan, ectx;

/// vars and stuffff
var mobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent ) ){

  mobile = true;

}
var SL = new SoundLoader();
var FPS = 5;
if(mobile){
  var w = window.innerWidth;
  var h = window.innerHeight;
}else{

  var w = 800;
  var h = 480;

}
var blockSize = 32;
var cols, rows , tot;
var hanTick = false;
var enemyCount = 0;
var playerCount = 0;
var stage = localStorage.getItem("stage");
 if(stage == null) stage = 1;
stage = parseInt(stage);
var gameState = "title";
var maxBlocks = 10;
var numBlocks = 0;
var muted = false;
var rulesReady = false;
var titleReady = false;
///arrays
var blocks = [];
var squares = [];

///objects
var han, grid, ui, enemy, rules, mouseHan;

function gameWin(){

  uictx.font = "40 px ,'Press Start 2P'"; 
  uictx.clearRect(0 , 0 , w  , h / 1.5 );
  uictx.fillText("STAGE WIN!" , w / 5 , h / 2);
  gameState = "win";
  stage ++;
  numBlocks = 0;
  SL.win.play();
  ui.drawMute();
  ui.drawReset();
  localStorage.stage = stage;

};

function gameOver(){

  uictx.font = "40 px ,'Press Start 2P'"; 
  uictx.clearRect(0 , 0 , w  , h / 1.5 );
  uictx.fillText("GAME OVER" , w / 5 , h / 2);
  numBlocks = 0;
  gameState = "gameOver";
  SL.lose.play();
  ui.drawMute();
  ui.drawReset();

};

function tick(){

 setTimeout(function(){ tick();  }, 1000 / FPS);

 if(hanTick){

   han.tick();

  }

};
	
function tstart(e){

 for(var i = 0; i < squares.length; i++){

  //// place unit on grid

   if(e.touches[0].pageX > squares[i].x && e.touches[0].pageX < squares[i].x + blockSize &&
       e.touches[0].pageY > squares[i].y && e.touches[0].pageY < squares[i].y + blockSize &&
	e.touches[0].pageX < w / 2 && gameState == "play" && !hanTick && numBlocks < maxBlocks){
        
           squares[i].fill = true;
           grid.checkFill();
	   numBlocks ++;
	   ui.updateNumBlocks();
	   SL.place.play();

        }

  }

   //// click run button
 
   if(e.touches[0].pageX > 20 && e.touches[0].pageX < 80 &&
       e.touches[0].pageY > (h / 1.2 - 50) && e.touches[0].pageY < h && gameState == "play" ){
              
        hanTick = true;
        console.log("run");
	SL.click.play();
    } 

  //// click mute button

   if(e.touches[0].pageX > ( w - 100 ) && e.touches[0].pageX < w &&
       e.touches[0].pageY > 0 && e.touches[0].pageY < 100 ){

        if(muted){

	setTimeout(function(){ SL.unMute(); } , 500);
	SL.click.play();

      }else if(!muted){

	SL.click.play();
	setTimeout(function(){ SL.mute(); } , 500);

     }
	console.log("muted: " + muted);

  }

 /// click reset button

   if(e.touches[0].pageX > w - 100 && e.touches[0].pageX < w  &&
       e.touches[0].pageY > (h / 1.2 - 50) && e.touches[0].pageY < h && gameState == "play" ){

	SL.click.play();
	console.log("game reset");
	reset();

   }

};

function tmove(){

 event.preventDefault();

};

function createRules(){

    uictx.clearRect( 100 , 0 , w , h);  
    rules = new Rules();
    gameState = "rules";
    ui.drawMute();
    ui.drawReset();

};

function tend(){

 if(gameState == "gameOver"){

     reset();       
     SL.click.play();

 }

 if(gameState == "title" && titleReady){
  
    setTimeout(function(){ createRules(); } , 500 );
    SL.click.play();

 }

 if(gameState == "rules" && rulesReady){

	delete rules;
	uictx.clearRect( 0 , 0 , w , h);
	gameState = "play";
	SL.click.play();
	ui.drawMute();
 	ui.drawReset();
	ui.drawRun();
	ui.updateNumBlocks();

  }

  if(gameState == "win"){

   reset();
   SL.click.play();

 }

 console.log(gameState);

};

function reset(){

   playerCount = 0;
   enemyCount = 0;

	for(var i in squares){

	squares[i].fill = false;
	squares[i].enemy = false;
	squares[i].neighbors = 0;
	squares[i].enemyNeighbors = 0;

	}

	numBlocks = 0;
	hanTick = false;
        uictx.clearRect(0 , 0 , w  , h / 1.5 );
	enemy.spawnEnemies();
	gameState = "play";
	grid.checkFill();
	ui.updateNumBlocks();
	ui.drawMute();

};

function startGame(){

 can = document.getElementById("bg");
 can.width = w;
 can.height = h;
 ctx = can.getContext("2d");   
 ctx.fillRect ( 0, 0, w ,h );

 pcan = document.getElementById("player");
 pcan.width = w;
 pcan.height = h;
 pctx = pcan.getContext("2d");   
 pctx.fillStyle = "#00FFFF";
 pctx.strokeStyle = "#00FFFF";
 pctx.shadowColor = "#00FFFF";
 pctx.shadowBlur = 40;

 uican = document.getElementById("ui");
 uican.width = w;
 uican.height = h;
 uictx = uican.getContext("2d");   
 uictx.font = "40 px ,'Press Start 2P'"; 

 bcan = document.getElementById("bound");
 bcan.width = w;
 bcan.height = h;
 bctx = bcan.getContext("2d");   
 bctx.fillStyle = "#660066";
 bctx.shadowColor = "#660066";
 bctx.shadowBlur = 40;

 ecan = document.getElementById("enemy");
 ecan.width = w;
 ecan.height = h;
 ectx = ecan.getContext("2d");   
 ectx.fillStyle = "#FF0000";
 ectx.shadowColor = "#FF0000";
 ectx.shadowBlur = 40;

 gcan = document.getElementById("grid");
 gcan.width = w;
 gcan.height = h;
 gctx = gcan.getContext("2d");   
 gctx.lineWidth = 3;
 gctx.strokeStyle = "#00FF00";
 gctx.fillStyle = "#CCCCCC";

 if(mobile){
 
 document.addEventListener("touchstart" , tstart , false);
 document.addEventListener("touchmove" , tmove , false);
 document.addEventListener("touchend" , tend , false);
 console.log("::ON MOBILE::");

 }else{

 mouseHan = new MouseHandle(); 
 SL.startMusic();

 }
 
 enemy = new Enemy();
 han = new Handle();
 grid = new Grid();
 ui = new UI();
 ui.drawMute();
 ui.drawReset();
 ui.drawRun();
 tick();

};


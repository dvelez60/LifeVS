function MouseHandle(){

 function init(){

 document.addEventListener("mousedown" , mdown , false);
 document.addEventListener("mousedown" , mup , false);

 };

 function mdown(e){

  for(var i = 0; i < squares.length; i++){

  //// place unit on grid

   if(e.pageX > squares[i].x && e.pageX < squares[i].x + blockSize &&
       e.pageY > squares[i].y && e.pageY < squares[i].y + blockSize &&
	e.pageX < w / 2 && gameState == "play" && !hanTick && numBlocks < maxBlocks){
        
           console.log(i);
           squares[i].fill = true;
           grid.checkFill();
	   numBlocks ++;
	   ui.updateNumBlocks();
	   SL.place.play();

        }

  }

   //// click run button
 
   if(e.pageX > 20 && e.pageX < 80 &&
       e.pageY > (h / 1.2 - 50) && e.pageY < h && gameState == "play" ){
              
        hanTick = true;
        console.log("run");
	SL.click.play();
    } 

  //// click mute button

   if(e.pageX > ( w - 100 ) && e.pageX < w &&
       e.pageY > 0 && e.pageY < 100 ){

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

   if(e.pageX > w - 100 && e.pageX < w  &&
       e.pageY > (h / 1.2 - 50) && e.pageY < h && gameState == "play" ){

	SL.click.play();
	console.log("game reset");
	reset();

   }
  
 };

 function mup(e){

    if(gameState == "gameOver"){

     reset();       
     SL.click.play();

 }

 if(gameState == "title" && titleReady){
  
    setTimeout(function(){ createRules(); } , 500 );
    SL.click.play();

 }

 if(gameState == "rules" && rulesReady){

	uictx.clearRect( 0 , 0 , w , h);
	delete rules;
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

 function createRules(){

    uictx.clearRect( 100 , 0 , w , h);  
    rules = new Rules();
    gameState = "rules";
    ui.drawMute();
    ui.drawReset();

 };

 init();	

};

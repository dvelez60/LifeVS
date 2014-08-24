function Grid(){

/// vars
var startX = 0;
var startY = 0;
var blockSize = 32;

var numColumns = Math.floor ( w / blockSize ) +1;
var numRows = Math.floor( h / blockSize ) +1;
cols = numColumns;
rows = numRows;

var totalBlocks = Math.floor( numColumns * numRows );
tot = totalBlocks;

console.log(totalBlocks);

function drawBound(){
 
 var boundX = Math.floor(numColumns / 2);
 
 for( var i = 0; i < squares.length; i ++){


	if(  i == boundX ){

	pctx.fillRect( squares[i].x , squares[i].y , blockSize , blockSize );
	boundX += cols;

	}
 }

};

this.checkFill = function(){

bctx.clearRect( 0,0, w,h);
ectx.clearRect( 0,0, w,h);

playerCount = 0;
enemyCount = 0;

 for(var i = 0; i < squares.length; i ++){

    if( squares[i].fill ){

 	if(!squares[i].enemy){

         bctx.fillRect( squares[i].x , squares[i].y , blockSize , blockSize );
	 playerCount ++;

    	}else if(squares[i].enemy){

         ectx.fillRect( squares[i].x , squares[i].y , blockSize , blockSize );
	 enemyCount ++;

	}

       }

  }

if(playerCount == 0 && hanTick && gameState == "play") gameOver();
if(enemyCount == 0 && hanTick && gameState == "play") gameWin();

};

this.checkNeighbors = function(){

	for( var i = 0; i < squares.length; i++){

        if(squares[i].enemy){

         if(squares[i].enemyNeighbors <  2) squares[i].fill = false;
    	 if(squares[i].enemyNeighbors > 3) squares[i].fill = false;
    	 if(squares[i].neighbors == 3) { squares[i].fill = true; squares[i].enemy = false; SL.eat.play(); }
    	 if(squares[i].enemyNeighbors == 3) { squares[i].fill = true; squares[i].enemy = true; }

	 }

	 if(!squares[i].enemy){

         if(squares[i].neighbors <  2) squares[i].fill = false;
    	 if(squares[i].neighbors > 3) squares[i].fill = false;
    	 if(squares[i].neighbors == 3) { squares[i].fill = true; squares[i].enemy = false; SL.uCreate.play(); }
    	 if(squares[i].enemyNeighbors == 3) { squares[i].fill = true; squares[i].enemy = true; SL.eat.play(); }

	}
	

	}
};

this.render = function(){

 gctx.beginPath();

 for(var i in squares){

   gctx.moveTo( squares[i].x , squares[i].y );
   gctx.lineTo( squares[i].x + blockSize , squares[i].y );
   gctx.lineTo( squares[i].x + blockSize, squares[i].y + blockSize );
   gctx.lineTo( squares[i].x , squares[i].y + blockSize);
   gctx.lineTo( squares[i].x , squares[i].y);

  }

    gctx.stroke();

};

function init(){

 var tempCount = 0;

 for( var i = 0; i < totalBlocks; i++){

     squares.push({

       x: startX,
       y: startY,
       fill: false,
       neighbors:0,
       enemyNeighbors:0,
       enemy: false

   })
  
  tempCount++;

  startX += blockSize;
  
  if(tempCount == numColumns){

   tempCount = 0;
   startX = 0;
   startY += blockSize;

  }

 }

console.log(squares.length);

 drawBound();
 enemy.spawnEnemies();

 };

 init();
 this.render();
 this.checkFill();

};

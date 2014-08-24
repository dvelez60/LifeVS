/*

----------rules----------
1 - if no neighbors, block dies
2 - if 2 or 3 neighbors, return
3 - if more than 3 neighbors,  dies
4 - if surrounded , create new block
5 - if 2 or more surround opposing, opposing dies
-------------------------

---calculate neighbors---
1- right = i + 1
2- left = i - 1
3- down = i + cols
4- up = i - cols
5- adjDR = i + (cols + 1)
6- adjDL = i + (cols - 1)
7- adjUR = i - (cols + 1)
8- adjUL = i - (cols - 1)
-----------------------

*/

//// NEIGHBORS process sequentially

function Handle(){

 var o;


function checkLR( a ){

if( (a - 1 > - 1) &&  squares[a - 1].fill ){

 if(squares[a - 1].enemy){

   squares[a].enemyNeighbors++;

 }else{

 squares[a].neighbors ++;

 }

}

if( (a + 1 < tot) && squares[ a + 1].fill){

 if(squares[a + 1].enemy){

   squares[a].enemyNeighbors++;

 }else{

 squares[a].neighbors ++;

 }

 }

};

function checkUD( a ){

if( (a - cols > - 1) &&  squares[a - cols].fill ){

 if(squares[a - cols].enemy){

   squares[a].enemyNeighbors++;

 }else{

 squares[a].neighbors ++;

 }


}

if( (a + cols < tot) && squares[ a + cols].fill){

 if(squares[a + cols].enemy){

   squares[a].enemyNeighbors++;

 }else{

 squares[a].neighbors ++;

 }

}

};

function checkADJ( a ){

/// adj up left

if( (a - (cols - 1) > - 1) &&  squares[a - (cols - 1)].fill ){

 if(squares[a - (cols - 1)].enemy){

   squares[a].enemyNeighbors++;

 }else{

 squares[a].neighbors ++;

 }


}

/// adj up right

if( (a - (cols + 1) > - 1) &&  squares[a - (cols + 1)].fill ){

 if(squares[a - (cols + 1)].enemy){

   squares[a].enemyNeighbors++;

 }else{

 squares[a].neighbors ++;

 }

}

/// adj down right

if( (a + (cols + 1) < tot) && squares[ a + (cols + 1)].fill){


 if(squares[a + (cols + 1)].enemy){

   squares[a].enemyNeighbors++;

 }else{

 squares[a].neighbors ++;

 }

}

/// adj down left

if( (a + (cols - 1) < tot) && squares[ a + (cols - 1)].fill){

 if(squares[a + (cols - 1)].enemy){

   squares[a].enemyNeighbors++;

 }else{

 squares[a].neighbors ++;

 }

}

};

 this.tick = function(){

    for( var i = 0; i < squares.length; i++){
              
               //// check for neighbors
                        
		 squares[i].neighbors = 0;
		 squares[i].enemyNeighbors = 0;
                 checkLR(i);
                 checkUD(i);
                 checkADJ(i);

  } //// squares loop


      grid.checkNeighbors();
      grid.checkFill();

  };


};

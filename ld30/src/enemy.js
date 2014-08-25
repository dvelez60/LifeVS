/**************

 patterns:

 1 - small ship
 2 - little arrow
 3 - heart
 4 - arrow
 5 - reverse arrow
 6 - infinite loop line
 7 - dart
 8 - rocket
 9 - small stair 
 10 - square
 11 - medium ship
 12 - mini ship

***************/


function Enemy(){

this.spawnEnemies = function(){

// set enemy patterns

switch(stage){

case 12:

/// mini ship

 squares[ Math.floor( (cols * 3) + (cols / 2) + 1) ].fill = true;
 squares[ Math.floor( (cols * 3) + (cols / 2) + 1) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 2) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 2) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 3) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 3) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 2) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 2) + (cols / 2) + 3) ].enemy = true;


break;

case 11:

/// medium ship

 squares[ Math.floor( (cols * 5) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 3) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 3) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 5) + (cols / 2) + 6) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 6) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 6) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 6) ].enemy = true;

 squares[ Math.floor( (cols * 3) + (cols / 2) + 6) ].fill = true;
 squares[ Math.floor( (cols * 3) + (cols / 2) + 6) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 7) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 7) ].enemy = true;

 squares[ Math.floor( (cols * 2) + (cols / 2) + 7) ].fill = true;
 squares[ Math.floor( (cols * 2) + (cols / 2) + 7) ].enemy = true;

 squares[ Math.floor( (cols * 2) + (cols / 2) + 9) ].fill = true;
 squares[ Math.floor( (cols * 2) + (cols / 2) + 9) ].enemy = true;

 squares[ Math.floor( (cols * 1) + (cols / 2) + 9) ].fill = true;
 squares[ Math.floor( (cols * 1) + (cols / 2) + 9) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 9) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 9) ].enemy = true;

 squares[ Math.floor( (cols * 7) + (cols / 2) + 9) ].fill = true;
 squares[ Math.floor( (cols * 7) + (cols / 2) + 9) ].enemy = true;

 maxBlocks = 30;

break;

case 10:

 /// square of death

 squares[ Math.floor( (cols * 7) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 7) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 7) + (cols / 2) + 6) ].fill = true;
 squares[ Math.floor( (cols * 7) + (cols / 2) + 6) ].enemy = true;

 squares[ Math.floor( (cols * 8) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 8) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 8) + (cols / 2) + 6) ].fill = true;
 squares[ Math.floor( (cols * 8) + (cols / 2) + 6) ].enemy = true;

 maxBlocks = 100;

break;

case 9:

 /// small stair

 squares[ Math.floor( (cols * 7) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 7) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 5) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 8) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 8) + (cols / 2) + 4) ].enemy = true;

 squares[ Math.floor( (cols * 9) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 9) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 6) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 6) ].enemy = true;

 squares[ Math.floor( (cols * 3) + (cols / 2) + 7) ].fill = true;
 squares[ Math.floor( (cols * 3) + (cols / 2) + 7) ].enemy = true;

 maxBlocks = 20;

break;

case 8:
 
 /// rocket

 squares[ Math.floor( (cols * 7) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 7) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 8) + (cols / 2) + 2) ].fill = true;
 squares[ Math.floor( (cols * 8) + (cols / 2) + 2) ].enemy = true;

 squares[ Math.floor( (cols * 8) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 8) + (cols / 2) + 4) ].enemy = true;

 squares[ Math.floor( (cols * 9) + (cols / 2) + 1) ].fill = true;
 squares[ Math.floor( (cols * 9) + (cols / 2) + 1) ].enemy = true;

 squares[ Math.floor( (cols * 9) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 9) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 10) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 10) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 10) + (cols / 2) + 1) ].fill = true;
 squares[ Math.floor( (cols * 10) + (cols / 2) + 1) ].enemy = true;

 maxBlocks = 15;
 
break;


case 7: 

// dart

 squares[ Math.floor( (cols * 5) + (cols / 2) + 1) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 1) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 1) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 1) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 1) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 1) ].enemy = true;

 squares[ Math.floor( (cols * 5) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 5) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 4) ].enemy = true;

 squares[ Math.floor( (cols * 5) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 7) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 7) ].enemy = true;

 squares[ Math.floor( (cols * 5) + (cols / 2) + 7) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 7) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 7) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 7) ].enemy = true;

 maxBlocks = 15;

break;

case 2:

/// little arrow
 squares[ Math.floor( (cols * 5) + (cols / 2) + 1) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 1) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 2) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 2) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 2) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 2) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 3) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 3) + (cols / 2) + 4) ].enemy = true;

 squares[ Math.floor( (cols * 7) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 7) + (cols / 2) + 4) ].enemy = true;

 maxBlocks = 10;

break;

case 5:

/// reverse arrow

 squares[ Math.floor( (cols * 5) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 4) ].enemy = true;

 squares[ Math.floor( (cols * 3) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 3) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 2) + (cols / 2) + 2) ].fill = true;
 squares[ Math.floor( (cols * 2) + (cols / 2) + 2) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 4) ].enemy = true;

 squares[ Math.floor( (cols * 7) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 7) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 8) + (cols / 2) + 2) ].fill = true;
 squares[ Math.floor( (cols * 8) + (cols / 2) + 2) ].enemy = true;

 squares[ Math.floor( (cols * 5) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 3) ].enemy = true;

 maxBlocks = 20;

break;


case 3:

/// heart

 squares[ Math.floor( (cols * 5) + (cols / 2) + 2) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 2) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 2) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 2) ].enemy = true;

 squares[ Math.floor( (cols * 7) + (cols / 2) + 2) ].fill = true;
 squares[ Math.floor( (cols * 7) + (cols / 2) + 2) ].enemy = true;

 squares[ Math.floor( (cols * 5) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 4) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 4) ].enemy = true;

 squares[ Math.floor( (cols * 7) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 7) + (cols / 2) + 4) ].enemy = true;

 squares[ Math.floor( (cols * 8) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 8) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 9) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 9) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 10) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 10) + (cols / 2) + 3) ].enemy = true;


break;

case 4:

  /// arrow

 squares[ Math.floor( (cols * 5) + (cols / 2) + 2) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 2) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 3) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 3) + (cols / 2) + 4) ].enemy = true;

 squares[ Math.floor( (cols * 2) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 2) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 3) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 3) ].enemy = true;

 squares[ Math.floor( (cols * 7) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 7) + (cols / 2) + 4) ].enemy = true;

 squares[ Math.floor( (cols * 8) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 8) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 5) + (cols / 2) + 4) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 4) ].enemy = true;

 maxBlocks = 20;

break;

case 6:

 //// infinte loop line

 squares[ Math.floor( (cols * 4) + (cols / 2) + 7) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 7) ].enemy = true;

 squares[ Math.floor( (cols * 5) + (cols / 2) + 7) ].fill = true;
 squares[ Math.floor( (cols * 5) + (cols / 2) + 7) ].enemy = true;

 squares[ Math.floor( (cols * 6) + (cols / 2) + 7) ].fill = true;
 squares[ Math.floor( (cols * 6) + (cols / 2) + 7) ].enemy = true;

 maxBlocks = 50;

break;

case 1:

  //// small ship

 squares[ Math.floor( (cols * 4) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 3) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 3) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 6) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 6) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 7) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 7) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 8) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 8) ].enemy = true;

 squares[ Math.floor( (cols * 2) + (cols / 2) + 5) ].fill = true;
 squares[ Math.floor( (cols * 2) + (cols / 2) + 5) ].enemy = true;

 squares[ Math.floor( (cols * 4) + (cols / 2) + 6) ].fill = true;
 squares[ Math.floor( (cols * 4) + (cols / 2) + 6) ].enemy = true;

 squares[ Math.floor( (cols * 1) + (cols / 2) + 6) ].fill = true;
 squares[ Math.floor( (cols * 1) + (cols / 2) + 6) ].enemy = true;

 squares[ Math.floor( (cols * 3) + (cols / 2) + 9) ].fill = true;
 squares[ Math.floor( (cols * 3) + (cols / 2) + 9) ].enemy = true;

 squares[ Math.floor( (cols * 1) + (cols / 2) + 9) ].fill = true;
 squares[ Math.floor( (cols * 1) + (cols / 2) + 9) ].enemy = true;

 maxBlocks = 10;

break;

 }

 };


};

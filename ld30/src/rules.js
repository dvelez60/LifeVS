function Rules(){

 var originx = Math.floor( w / 6 );
 var originy = 20;
 var boundx = originx + 578;
 var boundy = Math.floor( h / 1.1 );

 function init(){

   setTimeout(function(){rend();}, 1000);
	
 };

 function rend(){

	ui.updateNumBlocks();

	/// draw rules window

	uictx.lineJoin = "bevel";
	uictx.strokeStyle = "#FFCC00";
	uictx.shadowColor = "#FFCC00";
	uictx.shadowBlur = 40;
	uictx.fillStyle = "#111111";
	uictx.lineWidth = 5;
	uictx.beginPath();
	uictx.moveTo( originx , originy );
	uictx.lineTo( boundx , originy );
	uictx.lineTo( boundx, boundy - 50 );
	uictx.lineTo( boundx - 100, boundy );
	uictx.lineTo( originx , boundy );
	uictx.lineTo( originx , originy - 2.5 );
	uictx.moveTo( originx , originy + 20);
 	uictx.lineTo( boundx , originy + 20);
	uictx.stroke();
	uictx.fill();

	/// rules text

	uictx.shadowColor = "#FFFFFF";
	uictx.fillStyle = "#FFFFFF";
	uictx.font = "12 px , 'Press Start 2P'";
	uictx.fillText("------ WELCOME TO 'LIFE VS'!------" , originx + 70 , originy + 18 );
	uictx.font = "8 px , 'Press Start 2P'";  
	uictx.fillText("* your goal is to eliminate the enemy's 'world'" , originx + 10 , originy + 38 );
	uictx.fillText("by creating you own 'world' to attack it." , originx + 10 , originy + 58 );
	uictx.fillText("1. you can only place units to the left of the screen." , originx + 10 , originy + 88 );
	uictx.fillText("2. when you press play, your units will enter a cycle..." , originx + 10 , originy + 108 );
        uictx.fillText("3. any unit with no neighbors will die." , originx + 10 , originy + 128 );
	uictx.fillText("4. any unit with fewer than 2 neighbors will die." , originx + 10 , originy + 148 );
	uictx.fillText("5. any unit with more than 3 neighbors will die." , originx + 10 , originy + 168 );
	uictx.fillText("6. any empty square with 3 or more neighbors will spawn a unit." , originx + 10 , originy + 188 );
	uictx.fillText("7. any unit with 3 or more neighbors of the opposing side will convert." , originx + 10 , originy + 208 );

	/// reset UI colors
	uictx.shadowColor = "#FFFFFF";
	//uictx.fillStyle = "#"

	rulesReady = true;

 };

 init();

};

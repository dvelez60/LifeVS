function UI(){

var runOrigin = h / 1.2;
var titOriginx = w / 5;
var titOriginy = h / 2;
var muteOriginx = w / 1.05;
var muteOriginy = 20;
var resetOriginx = w / 1.05;
var resetOriginy = h / 1.2;

function init(){

 uictx.strokeStyle = "#FFFFFF";
 uictx.fillStyle = "#FFFFFF";
 uictx.shadowColor = "#FFFFFF";
 uictx.shadowBlur = 40;
 uictx.lineWidth = 1;
 
 setTimeout(function(){ drawTitle(); } , 1000);

};

this.drawRun = function(){

 /// run button

 uictx.beginPath();
 uictx.moveTo( 20 , runOrigin ); 
 uictx.lineTo( 60 , runOrigin + 25);
 uictx.lineTo( 20 , runOrigin + 50);
 uictx.lineTo( 20 , runOrigin);
 uictx.stroke();
 uictx.fill(); 

};

this.drawReset = function(){

 /// reset button
 
	uictx.lineJoin = "miter";
	uictx.strokeStyle = "#FFFFFF";
	uictx.lineWidth = 5;
	uictx.shadowColor = "#FFFFFF";
	uictx.fillStyle = "#FFFFFF";
	uictx.beginPath();
	uictx.arc( resetOriginx , resetOriginy , 24 , Math.PI * 0.5 , 0 );
	uictx.stroke();


	uictx.lineWidth = 1;
	uictx.beginPath();
	uictx.moveTo( resetOriginx , resetOriginy + 14 );
	uictx.lineTo( resetOriginx , resetOriginy + 34 );
	uictx.lineTo( resetOriginx + 12 , resetOriginy + 24);
	uictx.lineTo( resetOriginx , resetOriginy + 14 );
	uictx.fill();
	uictx.stroke();
 
};

this.drawMute = function(){

 /// mute button

 uictx.strokeStyle = "#FFFFFF";
 uictx.shadowColor = "#FFFFFF";
 uictx.lineJoin = "round";
 uictx.lineWidth = 5;
 uictx.beginPath();
 uictx.moveTo( muteOriginx , muteOriginy );
 uictx.lineTo( muteOriginx - 30 , muteOriginy );
 uictx.lineTo( muteOriginx - 30, muteOriginy + 30 );
 uictx.moveTo( muteOriginx , muteOriginy - 2 );
 uictx.lineTo( muteOriginx , muteOriginy + 30 );
 uictx.stroke();

 uictx.beginPath();
 uictx.arc( muteOriginx - 6 , muteOriginy + 30 , 6 , 0 , Math.PI * 2);
 uictx.stroke();
 uictx.fill();

 uictx.beginPath();
 uictx.arc( muteOriginx - 36 , muteOriginy + 30 , 6 , 0 , Math.PI * 2);
 uictx.stroke();
 uictx.fill();

};

function drawTitle(){

 /// title screen

 uictx.fillText("LIFE VS." , titOriginx , titOriginy );
 uictx.font = "15 px , 'Press Start 2P'";
 uictx.fillText("touch to begin", titOriginx , titOriginy + 30); 
 titleReady = true; 

};

this.updateNumBlocks = function(){

 /// num blocks used

 uictx.clearRect(0 , 0 , 200 , 100);
 uictx.font = "20 px , 'Press Start 2P'";
 uictx.fillText(numBlocks + "/" + maxBlocks , 10 , 30 );

};

init();

};

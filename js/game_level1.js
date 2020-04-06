
//game canvas
//variable
var canvas;
var c1;
var ballx=100;
var bally=100;
var speedx=10;	
var speedy=10;
var frameset=20;	
var paddlex=20;
var paddlew=200;
var code=0;
var live=0;
	



//variable end
	
	
	
var mouse={
	x:undefined,
	y:undefined
	
}

window.onload=function(){
	"use strict";
canvas=document.getElementById("gamecanvas");
c1=canvas.getContext("2d");
	
	
	setInterval(game,1000/frameset);

canvas.addEventListener('mousemove',function(event){
	
	mouse.x=event.x;
	mouse.y=event.y;
	paddlex=mouse.x-paddlew/2;
	
	
})


};
	

//draw main game
function game()
{
	"use strict";
movebottom();
draw();	


};

function reset()
	{
		ballx=100;
		bally=100;
	}
	
	
	
//move function
function movebottom()
	{
		bally=bally+speedy;
		ballx=ballx+speedx;
		if(bally>=canvas.height)
			{
				
				if(ballx>paddlex && ballx< paddlex+paddlew)
					{
						code++;
						
						speedy=-speedy;
						
					}
				
				
				
				else{
					speedy=-speedy;
					reset();
					live++;
					if(live==4){
						live--;
						code=0;
						live=0;
						alert("Game Over!");
					}
					 }
				
			}
		if(bally<=0)
			{
				
				
				speedy=-speedy;		
				
			}
		
		if(ballx>=canvas.width)
			{
				speedx=-speedx;
			}
		if(ballx<=0)
			{
				
				speedx=-speedx;
			}
	};
	
	




//draw every game function
function draw()
{
	
	"use strict";
	colorrect("#222f3e",0,0,canvas.width,canvas.height);
	
	c1.fillStyle="white";
	c1.font="20px arial";
	c1.fillText("Score:"+code,0,100);
	
	c1.fillStyle="white";
	c1.font="20px arial";
	c1.fillText("Life:"+live,0,130);
	
	
	
	/*c1.fillStyle="#222f3e";
c1.fillRect(0,0,canvas.width,canvas.height);
*/
//ball
circle("#10ac84",ballx,bally,10,0,Math.PI*2,false);
	/*c1.arc(ballx,bally,10,0,Math.PI*2,false);
	c1.fillStyle="#10ac84";*/

//top pandle
	colorrect("#ffffff",ballx-paddlew/2,2,200,10);
/*c1.fillStyle="#FFFFFF";
c1.fillRect(ballx-paddlew/2,2,200,10);
*/
//bottom pandle
colorrect("#5f27cd",paddlex,588,paddlew,10);
//c1.fillRect(paddlex,588,paddlew,10);

};
	
	
	
	function colorrect(color,x,y,width,height)
	{
		c1.fillStyle=color;
		c1.fillRect(x,y,width,height);
		
	}
	function circle(color,x,y,r,sang,eang,clk)
	{
		
		c1.beginPath();
		c1.fillStyle=color;
		c1.arc(x,y,r,sang,eang,clk);
		c1.fill();
	}
	

var game= document.getElementById("game");
var ctx = game.getContext("2d");

//game size var
var rows=15;
var cols =15;
var blockSize = 25;

game.height=rows*blockSize;
game.width=cols*blockSize;

//Snake head var
var snakeX= blockSize*4;
var snakeY= blockSize*4;

//Snake food
var foodX=blockSize*9;
var foodY=blockSize*9;

//move snake
var moveX=0;
var moveY=0;

//snake Body
var snakebody=[];

//game State
var gamestate="play";

//gameover menu
var gameovermenu = document.getElementById("gameovermenu");

//restart


//************************************************************************ */
// First Function called by browser

window.onload = function()
{   placefood();
    document.addEventListener("keydown", Movesnake);
    setInterval(drawGame,200);
}
function drawGame()
{
    ctx.fillStyle="#222";
    ctx.fillRect(0,0,game.width,game.height);

    ctx.fillStyle="orange";
    ctx.fillRect(foodX,foodY,blockSize,blockSize);
 
     if(foodX==snakeX && foodY==snakeY)
     {
   
        placefood();
     }


    ctx.fillStyle="red";
    snakeX=snakeX+moveX*blockSize;
    snakeY=snakeY+moveY*blockSize;
    ctx.fillRect(snakeX, snakeY, blockSize, blockSize)
   }

   //game  over conditions

   if(snakeX<0 || snakeX>cols*blockSize ||snakeY<0 || snakeY>rows*blockSize  )
  {  gamestate="gameover";
   // gameovermenu.style.visibility="visible";
  }
function placefood()
{
    foodX= Math.floor(Math.random()*cols)*blockSize;
    foodY= Math.floor(Math.random()*rows)*blockSize;
}

function Movesnake(e)
{
    if(e.code=="ArrowUp" && moveY!=1){
        moveX=0;
        moveY=-1;
    }
    else if (e.code=="ArrowDown" && moveY!=-1){
        moveX=0;
        moveY=1;
    }
    else if (e.code=="ArrowLeft" && moveY!=1){
        moveX=-1;
        moveY=0;
    }
    else if (e.code=="ArrowRight" && moveY!=-1){
        moveX=1;
        moveY=0;
    }

}
function restart()
{
    location.reload();
}
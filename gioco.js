var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//variabili pallina
var xPallina=50;
var yPallina=50;
var dx=2;
var dy=2;
var raggio = 20;

//variabili racchetta
var wRacchetta=100;
var hRacchetta=30;
var xRacchetta=0;
var yRacchetta= canvas.height-hRacchetta-20;
var vaiDestra=false;
var vaiSinistra=false;

function disegnaRacchetta() {
	ctx.beginPath();
  ctx.rect(xRacchetta, yRacchetta, wRacchetta, hRacchetta);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function disegnaPallina() {
	ctx.beginPath();
  ctx.arc(xPallina, yPallina, raggio, 0, Math.PI*2, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

document.addEventListener("keydown", premiTasto);
document.addEventListener("keyup", lasciaTasto);

function premiTasto(e) {
	if(e.key == "Right" || e.key == "ArrowRight") {
        vaiDestra = true;
    }
    
    if(e.key == "Left" || e.key == "ArrowLeft") {
        vaiSinistra = true;
    }
}

function lasciaTasto(e) {
	if(e.key == "Right" || e.key == "ArrowRight") {
        vaiDestra = false;
    }
    
    if(e.key == "Left" || e.key == "ArrowLeft") {
        vaiSinistra = false;
    }
}

function eseguiGioco(){
	//cancella lo schermo
	ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // esegue tutte le azioni di gioco
	xPallina = xPallina + dx;
  yPallina = yPallina + dy;
  
  if(xPallina > canvas.width-raggio  || xPallina < raggio) {
  	dx = -dx;
  }
  
  if(yPallina > canvas.height-raggio || yPallina < raggio) {
  	dy = -dy;
  }
 
  if(vaiDestra) {
  	xRacchetta = xRacchetta +5;
  }
  if(vaiSinistra) {
  	xRacchetta = xRacchetta -5;
  }
  
  
  //disegna il risultato a schermo
  
  disegnaRacchetta();
  disegnaPallina();
}

setInterval(eseguiGioco, 10);

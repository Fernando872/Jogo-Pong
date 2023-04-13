let colidiu = false

let xBolinha = 300;
let yBolinha = 200 ;
let d = 20 ;
let raio = d/2;

//velocidade da bolinha
let velxBolinha = 6;
let velyBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 15;
let raqueteAltura = 100;
//Raquete Oponente
let xRaqueteOponente = 575;
let yRaqueteOponente = 150;
let velRaqueteOponente;

let pontosMeus = 0;
let pontosOponente = 0;


//define dimensões da tela
function setup() {
  createCanvas(600 , 400);
}

//desenho
function draw() {
  background(0);
  mostraBolinha();

  
  //movimenta a bolinha
  movimentaBolinha();
  
  //se esta colidindo, vá para o outro lado
  verificaColisao();
  //Movimentar Raquete
  movimentaMinhaRaquete();
  
  //Criando Raquete
  mostrarRaquete(xRaquete , yRaquete);
  //Raquete Oponente
  mostrarRaquete(xRaqueteOponente,yRaqueteOponente);
  
  //Movimentar Raquete
  movimentaMinhaRaquete();
  
  //Colidir com a Raquete
  
 //VerificaColisaoRaquete
  colisaoMinhaRaqueteBiblioteca(xRaqueteOponente , yRaqueteOponente , xRaquete,yRaquete);
  colisaoMinhaRaqueteBiblioteca(xRaquete , yRaquete, xRaquete,yRaquete);

  //MovimentaRaqueteOponente
  MovimentaRaqueteOponente();
  //incluirplacar
  incluirPlacar();
  //placar
  MarcarPonto();

  
}

function mostraBolinha(){
  
circle(xBolinha , yBolinha , d);

}
function movimentaBolinha(){
  xBolinha += velxBolinha;
  yBolinha += velyBolinha;
  
}
function verificaColisao(){
  

  if(xBolinha + raio > width || xBolinha - raio <0){
   velxBolinha *=-1;
  }
  if(yBolinha + raio > height || yBolinha - raio  <0){
    velyBolinha *= -1;
   }
  }
function verificaColisaoRaquete(x, y){
  colisao = collideRectCircle(x, y,
  compRaquete, alturRaquete, xBolinha, yBolinha, raio);
  if(colisao){
    velocidadeXBolinha *= -1;
  }
}
  function mostrarRaquete(x , y){
  rect( x,y,raqueteComprimento, raqueteAltura); 
  }  

  function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 5;
 }
   
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 5;
  }
}


function verificaColisaoRaquete(){
  if(xBolinha - raio < yRaquete + raqueteComprimento
     && yBolinha - raio < yRaquete +
     raqueteAltura 
     && yBolinha + raio > yRaquete)
  
    velxBolinha *= -1;
}

function MovimentaRaqueteOponente(){
  velRaqueteOponente = velyBolinha;
  yRaqueteOponente += velRaqueteOponente
}
function incluirPlacar(){
  fill(255);
  text(pontosMeus , 278,26);
  text(pontosOponente,300,26);

}
function MarcarPonto(){
  if(xBolinha <10){
    pontosMeus += 1;
    
  }
  if(xBolinha > 590){
    pontosOponente += 1;
    
  }
}
 function colisaoMinhaRaqueteBiblioteca(x,y){
   
colidiu = 
  collideRectCircle(x , y, raqueteComprimento,
      raqueteAltura , xBolinha , yBolinha , raio);
if(colidiu){
  velxBolinha *=-1;

}

 }
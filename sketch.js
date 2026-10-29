//Projeto Bolinha Final
//Movimentando  BOLINHA NO EIXO x E y

let xBolinha = 200;
let yBolinha = 200;

let xVelocidade = 5;
let yVelocidade = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  verificaColisaoY();
}



//----------Função Mostra Bolinha----------

function mostraBolinha(){
  circle(xBolinha, yBolinha, 15)
}


//----------Verifica Colisão no Eixo X-----------
function verificaColisao(){
  if(xBolinha > width || xBolinha < 0){
    xVelocidade *= -1;
  }
}


//---------Função Movimenta Bolinha-------
function movimentaBolinha(){
  xBolinha += xVelocidade;
  yBolinha += yVelocidade;
}

//-------------Verifica colisão no eixo Y-------------
function verificaColisaoY(){
  if(yBolinha > height || yBolinha < 0){
     yVelocidade *= -1;
  }
  
}



//------------Função click---------
function mousePressed(){
  xVelocidade *= -1;
  console.log('Mudando a velocidade', xVelocidade);
}
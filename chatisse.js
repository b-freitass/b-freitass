//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 100;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup () {
 createCanvas(600, 400);
}
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBolinha();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente)
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}
function mostraBolinha() {
  circle(xBolinha,yBolinha,diametro);
}
function movimentaBolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}
function verificaColisaoBolinha() {
  if(xBolinha + raio > width || xBolinha - raio < 0) {velocidadexBolinha *= -1}
  if(yBolinha + raio > height || yBolinha - raio <0) {velocidadeyBolinha *= -1}
}
function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura)
}
function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)) {yRaquete -=10;}
  if (keyIsDown(DOWN_ARROW)) {yRaquete +=10;}
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento
    && yBolinha - raio < yRaquete + raqueteAltura
    && yBolinha + raio > yRaquete)
    { velocidadexBolinha *= -1; }
}
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 -30;
  yRaqueteOponente += velocidadeYOponente
}
function verificaColisaoRaqueteOponente(){
  if (xBolinha > xRaqueteOponente - raqueteComprimento
     && yBolinha - raio < yRaqueteOponente + raqueteAltura
     && yBolinha + raio > yRaqueteOponente)
    { velocidadexBolinha *= -1; }
}
function incluiPlacar(){
  fill (220)
  text(meusPontos, 278,26)
  text(pontosDoOponente, 340,26)
}
function marcaPonto(){
  if (xBolinha > 590) {meusPontos += 1;}
  if (xBolinha < 10) {pontosDoOponente +=1;}
}

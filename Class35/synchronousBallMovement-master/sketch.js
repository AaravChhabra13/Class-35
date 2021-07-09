var database;
var game, form, player;
var PlayerCount=0;
var GameState=0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game=new Game();
  game.start();

}

function draw(){

}


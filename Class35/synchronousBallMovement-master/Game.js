class Game{
constructor(){

}

getState(){
    var gsref=database.ref("gameState");
    gsref.on("value",function(data){
        GameState=data.val()
    })
}

updateState(s){
    database.ref("/").update({
        gameState:s
    })
}

start(){
    if(GameState===0){
        player=new Player();
        player.getCount();
        form=new Form();
        form.display();
    }
}
}
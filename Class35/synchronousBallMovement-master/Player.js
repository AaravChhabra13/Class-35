class Player{
constructor(){

}

getCount(){
    var pcref=database.ref("playerCount");
    pcref.on("value",function(data){
        PlayerCount=data.val()
    })
}

updateCount(c){
    database.ref("/").update({
        playerCount:c
    })
}

updateName(n){
    var playerIndex="player"+PlayerCount;
    database.ref(playerIndex).set({
        name:n
    })
}

}
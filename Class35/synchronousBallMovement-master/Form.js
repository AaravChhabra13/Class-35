class Form{

constructor(){

}

display(){
    var title=createElement("HK");
    title.html("CAR RACER");
    title.position(230,50);

    var input=createInput("Type your name");
    input.position(230,160);

    var button=createButton("PLAY");
    button.position(250,300);

    button.mousePressed(function(){
        input.hide();
        button.hide();

         var n=input.value();

         PlayerCount+=1;
         player.updateName(n);
         player.updateCount(PlayerCount);

         var greet=createElement("H3");
         greet.html("Welcome"+n);
         greet.position(230,160);


    })
}
}
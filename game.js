class Game {
    constructor(){}
    getState(){
        var GameStateref = db.ref("Gamestate")
        GameStateref.on("value",function(data){
           gamestate=data.val();


        })}
        update(state){
            db.ref('/').update({
                Gamestate:state
            })
        }
        start(){
            if (gamestate === 0){
                player = new Player();
                player.getCount();
                form = new Form();
                form.display();

            }
        }
    }
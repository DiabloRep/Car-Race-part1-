class Player {
    constructor(){}
    getCount(){
        var playerCountref = db.ref("PlayerCount")
        playerCountref.on("value",function(data){
            playercount=data.val();

        })
    }
    updateCount(Count){
        db.ref('/').update({
            //update PlayerCount in Database
            PlayerCount:Count
        })
    }
    update(name){
        var playerIndex = "player"+playercount
        db.ref(playerIndex).set({
            name:name
        })

    }
}
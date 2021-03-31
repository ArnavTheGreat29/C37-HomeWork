class Contestant{
    constructor(){
        this.name = null;
        this.answer = 0;
        this.index = null;
    }
    getContestantCount(){
        database.ref('contestantCount').on("value",(data)=>{
            contestantCount = data.val()

        })
    }
    updateContestantCount(ContestantCountValue){
        database.ref('/').update({contestantCount: ContestantCountValue })
    }
    update(){
        database.ref('Contestants/Contestant'+ contestant.index).set({Name: this.name , Answer: this.answer})
    }
    static readContestantInfo(){
        database.ref('Contestants').on("value" , (data)=>{

            allContestants = data.val()
        })
    }
}
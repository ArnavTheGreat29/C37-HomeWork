class Question{
    constructor(){
     this.input1 = createInput('Name')
     this.input2 = createInput('Answer')

     this.button = createButton('Join')

     this.title = createElement()
     this.question = createElement()

     this.option1 = createElement()
     this.option2 = createElement()
     this.option3 = createElement()
     this.option4 = createElement()
     
}

hide(){
this.title.hide()
this.button.hide()
this.input1.hide()
this.input2.hide()
this.question.hide()
this.option1.hide()
this.option2.hide()
this.option3.hide()
this.option4.hide()
}

display(){
    this.title.html("MyQuiz Game")
    this.title.position(300,50)

    this.question.html("Q: I am lighter than air but a hundred people cannot lift me. Careful, I am fragile. What am I?")
    this.question.position(75,130)

    this.option1.html("A: Car")
    this.option1.position(75,230)

    this.option2.html("B: Feather")
    this.option2.position(75,260)

    this.option3.html("C: Bubble")
    this.option3.position(75,290)

    this.option4.html("D: Chocolate")
    this.option4.position(75,320)

    this.input1.position(120,360)
    this.input2.position(300,360)
  
    this.button.position(100,160)


    this.button.mousePressed(()=>{

    this.button.hide()
    this.input1.hide()
    this.title.hide()
    this.input2.hide()
        

        
    contestant.name = this.input1.value();
    contestant.answer = this.input2.value();
        console.log(contestantCount)
        contestantCount++
        console.log(contestantCount)
        contestant.index = contestantCount;
     
        contestant.updateContestantCount(contestant.index)
        contestant.update()
        
       
      
    
    })
}
}

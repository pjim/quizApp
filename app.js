// quiz app

// an object with the questions built in

var questions = [
    {question: 'name the hair dog',
     answers:['monkey','dogdog','carrot','wolf'],
     correctAnswer: 3},
     {question: 'how much cheese is in my house',
      answers: ['lots','not much','too much'],

      correctAnswer: 1}
      ];





    var questionNumber = 0;
    var userScore = 0;
//saves the given answer to redisplay on the radio when user goes back
    var answerSaved = [];

function displayQuestion(){


     //add checker that ensures at least one radio is checked
     function ensureRadioIsChecked(){
         var radios = getElementByTag('input');
         var checkedNumber = 0;
         for( buttons in radios){
            if(button.type = radio){
                if(button.checked === true){
                    checkedNumber ++;
                 }
             }
         }             
         if(checkedNumber === 0){
          alert("you must select at least one answer")
          questionNumber -= 1;
          displayQuestion();
     }
 
     function amendUserScore(){
         
             var answerNumber = questions[questionNumber -1].correctAnswer;
             var correctValue = questions[questionNumber -1].answers[answerNumber];
             var correctRadio = document.getElementById(correctValue);
             
             if(correctRadio.checked === true){
              userScore++;
                         
             } 

     }
    
     
     var formContainer = document.getElementById('formContainer');
 
     function removeLastQuestions(){
        var oldAnswers = formContainer.firstChild; 
         console.log(oldAnswers); 
          formContainer.removeChild(oldAnswers);
        
     }
    if(questionNumber !== 0){ 

    amendUserScore();
    removeLastQuestions();
    ensureRadioIsChecked();}

         
    
    var displayForm = document.createElement("form");
        formContainer.appendChild(displayForm);
    var answerGroup;
    console.log(questions[questionNumber]);
    
    if(typeof questions[questionNumber] === 'undefined'){
        var scoreDisplay = document.createElement('h2');
        var scoreText = 'Your score is ' + userScore;
        var scoreNode = document.createTextNode(scoreText);          


        scoreDisplay.appendChild(scoreNode);
        formContainer.appendChild(scoreDisplay);
        var questionButton = document.getElementById('nextQuestion')
        questionButton.parentNode.removeChild(questionButton);
    }else{ 
     
           for( var i = 0; i < questions[questionNumber].answers.length; i++){
          answerGroup = document.createElement("p");
          
          var radio = document.createElement("input");
          
          radio.type ="radio";
          radio.name = "answers"; 
          radio.id = questions[questionNumber].answers[i];
          var answerText =  document.createTextNode(questions[questionNumber].answers[i]);
           
          answerGroup.appendChild(answerText);
            
          
          displayForm.appendChild(answerGroup);
          displayForm.appendChild(radio);
          }
    }
    
     questionNumber++;         
}

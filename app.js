// quiz app

// an object with the questions built in

var questions = [
    {question: 'name the hair dog',
     answers:['monkey','dogdog','carrot','wolf'],
     correctAnswer: 'wolf'},
     {question: 'how much cheese is in my house',
      answers: ['lots','not much','too much'],

      correctAnswer: 'lots'}
      ];





    var questionNumber = 0;
    var userScore = 0;
//saves the given answer to redisplay on the radio when user goes back
    var answerSaved = [];

function backButton(){
    //go back show the right checked button and amend the score

}

function displayQuestion(){

     //add checker that ensures at least one radio is checked
     var isChecked = true;
     function ensureRadioIsChecked(){
         var radios = document.getElementsByName('answers');
         isChecked = false;
         for(var i = 0; i < radios.length; i++ ){
            if(radios[i].type === 'radio' && radios[i].checked){

                    isChecked = true;
                    answerSaved[questionNumber] = radios[i].id;                
             
            }             
         }
         if(!isChecked){
          alert("you must select at least one answer"); 
         return;
        }
     }
 
     function amendUserScore(){
         
             var correctValue = questions[questionNumber -1].correctAnswer;

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


 ensureRadioIsChecked();
      if(isChecked){
         amendUserScore();
         removeLastQuestions();
        
         }
    }

         
    
    console.log(questions[questionNumber]);
   if(isChecked){ 
       if(typeof questions[questionNumber] === 'undefined'){
           var scoreDisplay = document.createElement('h2');
           var scoreText = 'Your score is ' + userScore;
           var scoreNode = document.createTextNode(scoreText);          


           scoreDisplay.appendChild(scoreNode);
           formContainer.appendChild(scoreDisplay);
           var questionButton = document.getElementById('nextQuestion');
           questionButton.parentNode.removeChild(questionButton);
       }else{ 
             
              var displayForm = document.createElement("form");
                  formContainer.appendChild(displayForm);
              var answerGroup;     

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
             questionNumber++;         

    }
  }
    
}

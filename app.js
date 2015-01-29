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



// display the questions with the respective answer buttons and switch to the next one
// with the next button
    var questionNumber = 0;
    var userScore = 0;
function displayQuestion(){

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
    removeLastQuestions();}

         
    
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

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
     // function amendUserScore(){
     //     if(userScore != 0){
     //         check radio value number matches correctAnswer 
     //          increase score
     //     }
     // }
     //
     function removeLastQuestions(){
         var allQuestions =  document.getElementById('questionForm');
         console.log(allQuestions.children.length);
         for(var removeIndex = 0; removeIndex < allQuestions.children.length; removeIndex++) {
             allQuestions.removeChild(allQuestions.children[removeIndex]);
           }
     }
      
    removeLastQuestions();
         
    
    var displayForm = document.createElement("form");
    
    var answerGroup;
 
    for( var i = 0; i < questions[questionNumber].answers.length; i++){
      answerGroup = document.createElement("p");
      
      var radio = document.createElement("input");
      
      radio.type ="radio";
      radio.name = "answers"; 
      radio.value = questions[questionNumber].answers[i];
      var answerText =  document.createTextNode(questions[questionNumber].answers[i]);
       
      answerGroup.appendChild(answerText);
        
      var qForm =  document.getElementById("questionForm");
      qForm.appendChild(answerGroup);
      qForm.appendChild(radio);
    }
    
     questionNumber++;         
}

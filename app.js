

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
    var answerSaved = [];
    var formContainer = document.getElementById('formContainer');
    if(window.location !==  "file:///home/pjim/programming/quizApp/quizApp.html"){  
        var userName = '';
    }


function nameFormButton(){ 
     userName = document.getElementById('name').value;       
     localStorage.setItem("UsName",userName);
//       return userName;
       location = "file:///home/pjim/programming/quizApp/quizApp.html";

       } 

$('#name').keydown(function(e){
   if(e.which == 13){

       e.preventDefault();
       nameFormButton();
    }
});

var storedName = localStorage.getItem('UsName');
var $storedNamePrint = $("<h2> " + storedName + "</h2>");
console.log($storedNamePrint);
var nameText = document.createElement('h2');
var userNameText = document.createTextNode(storedName);
nameText.appendChild(userNameText);


if(window.location == "file:///home/pjim/programming/quizApp/quizApp.html" && questionNumber == 0){

        $("body").append($storedNamePrint);

   //document.body.appendChild(nameText);
}

$('#nextQuestion').click(function(){
    if($("h2").length){
        $("h2").remove();
    }
});

console.log(localStorage.getItem('UsName'));



function backButton(){
    //go back show the right checked button and amend the score
    //doesn't check the radio is right just deletes shows then decrements
    questionNumber -= 2;
    removeLastQuestions();
    displayQuestion();
}

var isChecked = false;
function nextButton(){

     
//here for refactoring of the next button
//first checks the radio is checked
//then saves the answer
//then deletes the previous questions adds the next and increments the question
    ensureRadioIsChecked();
    if(isChecked){
        removeLastQuestions();
           if(typeof questions[questionNumber] === 'undefined'){
               //send to calculate score and print score
               // else run display questions
               calculateFinalScore();
              displayFinalScore();

           }else{
                displayQuestion();
           }
    }
}
function calculateFinalScore(){
              
            for(var i = 0; i < answerSaved.length; i++){
                 if(answerSaved[i] === questions[i].correctAnswer){
                     userScore++
                 }
                  
            } 

           
           
           
           
           
           

     }

function ensureRadioIsChecked(){
    var radios = document.getElementsByName('answers');

    for(var i = 0; i < radios.length; i++ ){
       if(radios[i].type === 'radio' && radios[i].checked){

            isChecked = true;
            answerSaved[questionNumber -1] = radios[i].id;                
            console.log(answerSaved); 
       }             
    }
    if(!isChecked){
     alert("you must select at least one answer"); 
    return; 
   }
}

     function removeLastQuestions(){
        var oldAnswers = formContainer.firstChild; 
         console.log(oldAnswers); 
          formContainer.removeChild(oldAnswers);
        
     }
     
    function  displayFinalScore(){
        
      var scoreDisplay = document.createElement('h3');
           var scoreText = 'Your score is ' + userScore;
           var scoreNode = document.createTextNode(scoreText);          


           scoreDisplay.appendChild(scoreNode);
           formContainer.appendChild(scoreDisplay);
           var questionButton = document.getElementById('nextQuestion');
           questionButton.parentNode.removeChild(questionButton);
           
           $('#backButton').remove();
    }

function displayQuestion(){   
        
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
        //add section for checking saved answer and checking appropriate button

        }
        if(typeof answerSaved[questionNumber] !== 'undefined'){
          var selected = document.getElementById(answerSaved[questionNumber]);
          selected.checked = true;
           }
        questionNumber++;         
}

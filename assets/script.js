const intro = document.getElementById("intro");
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question-text");
const questionChoice = document.getElementById("question-choice");
const choice1 = document.getElementById("btn-1");
const choice2 = document.getElementById("btn-2");
const choice3 = document.getElementById("btn-3");
const choice4= document.getElementById("btn-4");
const Score= document.getElementById("Score");
const endMessage = document.getElementById("endMessage");
const results = document.getElementById("results");
const scoreList = document.getElementById("scorelist");
const startButton = document.getElementById("start-btn")
const Check = document.getElementById('check-answer')
const View = document.getElementById('View')




var questions = [
    { question: 'Commonly used data types DO NOT include:', 
    choice1 : "1. strings",
    choice2 : "2. booleans",
    choice3 : "3. alerts",
    choice4 : "4. numbers",
    correct: "3"
},
{ question: "What is used primarily to add styling to a web page?", 
choice1 : "1. HTML",
choice2 : "2. CSS",
choice3 : "3. Python",
choice4 : "4. C++",
correct: "2"
},
{ question: "The condition in an if / else statement is enclosed with ________.", 
choice1 : "1. quotes",
choice2 : "2. curly brackets",
choice3 : "3. parenthesis",
choice4 : "4. square brackets",
correct: "2"
},
{ question: "Which event occurs when the user clicks on an HTML element?", 
choice1 : "1. onclick",
choice2 : "2. onchange",
choice3 : "3. onmouseover",
choice4 : "4. onmouseclick",
correct: "1"
},
{ question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
choice1 : "1. JavaScript",
choice2 : "2. terminal/bash",
choice3 : "3. for loops",
choice4 : "4. console.log",
correct: "4"
},
{ question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
choice1 : "1. JavaScript",
choice2 : "2. terminal/bash",
choice3 : "3. for loops",
choice4 : "4. console.log",
correct: "4"
},
]



intro.classList.add('block')
questionContainer.classList.remove('block')
Score.classList.add('hide')
Score.classList.remove('block')


startButton.addEventListener('click', startQuiz)

let timeleft = 75
let startScore = 0
var Time = document.getElementById('time');
Time.textContent ="Time: " + startScore;

function startQuiz(){
    questionContainer.classList.add('block')
    questionContainer.classList.remove('hide')
    question.classList.add('block')
    question.classList.remove('hide')
    intro.classList.add('hide')
    intro.classList.remove('block')
    Score.classList.add('hide')
    Check.classList.add('flex')
    
    var timeInterval = setInterval(function() {
        Time.textContent ="Time: " + timeleft;
        timeleft-=1;
        
        if(timeleft === 0 || questions.length === nextQuestion+1)  {
            resultQuiz();
            clearInterval(timeInterval);
            Time.textContent = "Time: " + timeleft;
        }
    }, 1000);
    
    loadQuestions();
};




var questionIndex = questions.length -1;
var nextQuestion = 0;

function loadQuestions() {
    var q = questions[nextQuestion];
    question.innerHTML = q.question;
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
};

function checkAnswer(answer) {
    if (questions[nextQuestion].correct == answer) {
        Check.textContent = "Correct"
    }
    else {
        Check.textContent = "Wrong"
        timeleft -=10;
    }
    if (questions.length === nextQuestion+1) {
        resultQuiz()
        return;
    }
    nextQuestion++;
    loadQuestions();
    ;}
    
    function resultQuiz() {
        questionContainer.classList.add('hide')
        questionContainer.classList.remove('block')
        intro.classList.add('hide')
        intro.classList.remove('block')
        Score.classList.remove('hide')
        Score.classList.add('block')
        View.classList.add('hide')
        Check.classList.remove('flex')
        Check.classList.add('hide')
        
        if (timeleft === 0 || questions.length -1) {
            results.textContent = "Final score is " + timeleft + ".";
        }
    };
    
    var userInfo = document.getElementById('userInfo')
    
    userInfo.addEventListener('click', function() {
        var contactInfo = document.getElementById("contactInfo");       
        localStorage.setItem("contactInfo", JSON.stringify (contactInfo));
        localStorage.setItem("timeleft", JSON.stringify(timeleft));
        
        loadScores();
    });
    
    
    
    
    
    
    
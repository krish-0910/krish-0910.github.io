const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


let questions = [
    {
        question : "What is the most common causative agent of erythema multiforme (EM)? [Ans : HSV infection]",
        imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYGBZOA-i6UFrd-lGX4BQyQjq7N8pvNPe8A&usqp=CAU",
        choiceA : "HSV infection",
        choiceB : "Penicillin ",
        choiceC : "Malignancy",
        correct : "A"
    },{
        question : "What is the most common cause of sudden cardiac death (SCD)? [Ans : Ventricular Arrythmia] ",
        imgSrc : "https://www.bostonscientific.com/en-IN/health-conditions/ventricular-arrhythmias/description/_jcr_content/maincontent-par/image.img.vent-tachy-rhythm-480x600.jpg",
        choiceA : "Cardiopathy",
        choiceB : "Ventricular arrhythmia",
        choiceC : "Cocaine abuse",
        correct : "B"
    },{
        question : "Which hormone is the corpus luteum responsible for producing?[Ans : Progesterone ]",
        imgSrc : "https://www.breatheilo.com/wp-content/uploads/2021/02/Progesteron.jpg",
        choiceA : "Oestrogen",
        choiceB : "Luteinizing hormone",
        choiceC : "Progesterone",
        correct : "C"
    }
];


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; 
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); 
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function scoreRender(){
    scoreDiv.style.display = "block";
    
    const scorePerCent = Math.round(100 * score/questions.length);
    
    let img = (scorePerCent >= 80) ? "" :
              (scorePerCent >= 60) ? "" :
              (scorePerCent >= 40) ? "" :
              (scorePerCent >= 20) ? "" :
              "";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
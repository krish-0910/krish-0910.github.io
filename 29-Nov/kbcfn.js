var evaluation = function (rep){
    if(rep=="A"){
        console.log("Correct Answer");
        return true;
    }
    else if(rep=="a"){
        console.log("Correct Answer");
        return true;
    }
    else{
        console.log("Wrong Answer");
        return false;
    }
}

var btrue = function (rey){
    if(rey== "B"){
        console.log("Correct Answer");
        return true;
    }
    else if(rey== "b"){
        console.log("Correct Answer");
        return true;
    }
    else{
        console.log("Wrong answer");
        return false;
    }
}



var question = function(ques){
    if(ques==1){
        var a = window.prompt("Which represents the balloon\n (A)🎈\n (B)🧨");
        evaluation(a);
    }
    if(ques==2){
        var a = window.prompt("Which represents the pig \n (A)🐄 \n (B)🐖");
        btrue(a);
    }
    if(ques==3){
        var a = window.prompt("Which represents the cat\n (A)🐈 \n (B)🐖");
        evaluation(a);
    }
    if(ques==4){
        var a = window.prompt("which represents the dog \n (A)🐩 (B)🐄");
        evaluation(a);
    }
    if(ques==5){
        var a = window.prompt("which represents the Crossaint \n (A)🥐 (B)🍟");
        evaluation(a);
    }
    if(ques==6){
        var a = window.prompt("Congratulations! You've sucessfully completed current question sequence");
    }
}

var nm = window.prompt("Provide your name to proceed further");

var i = " ";
var a = " ";



loop1:
for(i=1; i<=6; i++){
    i= ques;
    question(i); 
    if(a==false){
        alert("Wrong Answer");
        console.log("Wrong answer, You are disqualified for the next round ");
        break;
    }
}

var prize = (i-1)*100;

console.log(nm+" "+"You won prize money of rupees"+" "+prize);
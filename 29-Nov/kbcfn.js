var evaluation = function (e){
    if(e=="A"||"a"){
        console.log("Correct Answer");
    }
    else{
        console.log("Wrong Answer");
        brk();
    }
}

var btrue = function (b){
    if(b== "B"||"b"){
        console.log("Correct Answer");
    }
    else{
        console.log("Wrong answer");
        brk();
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
        var a = window.prompt("Congratulations! you've sucessfully completed current question sequence");
    }
}

var nm = window.prompt("Provide your name to proceed further");

var i = " ";

// var brk = " ";
var brk = function(brek){
    break ;
}

loop1:
for(i=1; i<=6; i++){
    // i= ques;
    question(i); 
}

var prize = (i-1)*100;

console.log(nm+" "+"You won prize money of rupees"+" "+prize);
var bfalse = function(ans){
    if(ans== "B"||"b"){
        console.log("We regret to inform you that you opted the wrong answer\n You are disqualified");
        alert("Wrong answer \n You are disqualified");
        break;
    }
}

var afalse = function(ansr){
    if(ansr == "A"||"a"){
        console.log("We regret to inform you that you opted the wrong answer\n You are disqualified");
        alert("Wrong answer \n You are disqualified");
        break; 
    }
}

var question = function(ques){
    if(ques==1){
        var a = window.prompt("Which represents the balloon\n (A)🎈\n (B)🧨");
        bfalse(a);
    }
    if(ques==2){
        var a = window.prompt("Which represents the pig \n (A)🐄 \n (B)🐖");
        afalse(a);
    }
    if(ques==3){
        var a = window.prompt("Which represents the balloon\n (A)🎈\n (B)🧨");
        bfalse(a);
    }
    if(ques==4){
        var a = window.prompt("Which represents the balloon\n (A)🎈\n (B)🧨");
        bfalse(a);
    }
    if(ques==5){
        var a = window.prompt("Which represents the balloon\n (A)🎈\n (B)🧨");
        bfalse(a);
    }
    if(ques==6){
        var a = window.prompt("Congratulations! you've sucessfully completed current question sequence");
    }
}

var nm = window.prompt("Provide your name to proceed further");

var i = " ";
for(i=1; i<=6; i++){
    i= ques;
    question(i); 
}

var prize = (i-1)*100;

console.log(nm+" "+"You won prize money of rupees"+" "+prize);
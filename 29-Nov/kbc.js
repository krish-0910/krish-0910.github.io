var nm = prompt("Enter your name to continue");
var i = " ";

for(i=1; i<=6; i++){

    if(i==1){
       var a = window.prompt("Which represents the balloon\n (A)🎈\n (B)🧨");
       if (a == "B"||"b" ){
           console.log("your entered a wrong answer ");
           break;
       }
    }
    if(i==2){
        var a = window.prompt("Which represents the pig \n (A)🐖 \n (B)🐄");
        if (a == "B"||"b" ){
            console.log("your entered a wrong answer ");
            break;
        }
    }
    if(i==3){
        var a = window.prompt("Which represents the cat \n (A)🐈 \n (B)🐖 ");
        if (a == "B"||"b" ){
            console.log("your entered a wrong answer ");
            break;
        }
    }
    if(i==4){
        var a = window.prompt("which represents the dog \n (A)🐩 (B)🐄");
        if (a == "B"||"b" ){
            console.log("your entered a wrong answer ");
            break;
        }
    }
    if(i==5){
        var a = window.prompt("which represents the Crossaint \n (A)🥐 (B)🍟");
        if (a == "B"||"b" ){
            console.log("your entered a wrong answer ");
            break;
        }
    }
    if(i==6){
        console.log("Congratulations you won the contest");
        break;
    }


}

var prize = (i-1)*100;

console.log( nm+ "You won the prize money of rupees"+prize);
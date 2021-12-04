var nm =window.prompt("Please enter your name to continue");
// var atrue = ["A","a"];
// var btrue = ["B","b"];

for(var i=1;i<=6;i++){
    if(i == 1){
        let a = window.prompt("Which represents pig ? \n (1)🐖 \n (2)🐄 ");
        if(a == 1){
            console.log("First Question - Correct");
            alert("Correct Answer");
        }
        else if(a == 2){
            console.log("Wrong Answer");
           alert("Wrong Answer"); break;
        }
    }
    if(i == 2){
        let a = window.prompt("Which represents cow ? \n (1)🐖 \n (2)🐄 ");
        if(a == 2){
            console.log("Second Question - Correct");
            alert("Correct Answer");
        }
        else {
            console.log("Wrong Answer");
           alert("Wrong Answer"); break;
        }
    }
    if(i == 3){
        let a = window.prompt("Which represents bone ? \n (1)🦴 \n (2)🦷 ");
        if(a == 1){
            console.log("Third Question - Correct");
            alert("Correct Answer");
        }
        else {
            console.log("Wrong Answer");
           alert("Wrong Answer"); break;
        }
    }
    if(i == 4){
        let a = window.prompt("Which represents chicken ? \n (1)🍗 \n (2)🥦 ");
        if(a == 1){
            console.log("Fourth Question - Correct");
            alert("Correct Answer");
        }
        else {
            console.log("Wrong Answer");
           alert("Wrong Answer"); break;
        }
    }
    if(i == 5){
        let a = window.prompt("Which represents Broccoli ? \n (1)🍗 \n (2)🥦 ");
        if(a == 2){
            console.log("Fifth Question - Correct");
            alert("Correct Answer");
        }
        else {
            console.log("Wrong Answer");
           alert("Wrong Answer"); break;
        }
    }
    if(i == 6){
        console.log("ALL THE QUESTIONS ARE CORRECT");
        alert("Succesfully completed current question sequence");
        break;
    }

}

console.log(i);

var prize = (i-1)*100;

console.log(nm+" "+"your prize money is"+" "+prize+"₹");
alert(nm+" "+"your prize money is"+" "+prize+"₹");

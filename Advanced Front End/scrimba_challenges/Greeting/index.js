const greetingDisplay = document.querySelector("#greeting-display");
const to = document.querySelector('#recipient-input');
const fro = document.querySelector('#sender-input');
const greeting = document.querySelector('#greeting-select');
const body = document.getElementsByTagName('body')[0];

const writeGreeting =_=> {
 let a = greeting.selectedIndex;
 let b = document.getElementsByTagName('option')[a].value;
 if (a == 0){
     alert('Select Your Greeting First');
     to.value = null;
 }
 else if(a!==0 && fro.value !== "" ){
    let recipient = to.value;
    let sender = fro.value;
    greetingDisplay.innerHTML = `${recipient+', '+b+'\n'}`+'<br></br>'+`${'From :'+sender}`;
 }
 else{
 let recipient = to.value;
 let sender = fro.value;
 greetingDisplay.innerHTML = `${recipient+', '+b+'\n'}`+'<br></br>';  
 } 
}

to.addEventListener('keyup',writeGreeting);
fro.addEventListener('keyup',writeGreeting);

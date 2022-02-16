const result = document.querySelector('#result');
const food = document.querySelector('#food-select');
const transport = document.querySelector('#transport-select');
const button = document.querySelector('#btn');
const checkbox = document.querySelector('#balloon-checkbox');
    

const calculate =_=>{
    let a = food.selectedIndex;
    let b = parseInt(document.getElementsByTagName("option")[a].value);
    let c = transport.selectedIndex;
    let d = parseInt(document.getElementsByTagName('option')[c].value);
    let e = parseInt(5);
    let total;
    if (checkbox.checked == true){
     total = parseInt(b+d+e);   
    } 
    else{
     total = parseInt(b+d);   
    }
    

    if(b==0 && d==0){
        alert('Please select an option');
    }
    else if( b == 0 && d !== 0){
        alert('Please select a valid food item'); 
    }
    else if( d==0 && b!==0){
        alert('Please selct a valid transportation option');
    }
    else{
    result.innerHTML = `${'Total Gift cost :'+' '+total+'$'}`;
    }
}
// const enter =(a)=>{
//     if(a.key==='Enter'){
//         calculate();
//     }
button.addEventListener('click',calculate);
// button.addEventListener('keypress',enter);
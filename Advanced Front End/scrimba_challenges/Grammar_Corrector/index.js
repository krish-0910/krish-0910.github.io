// javascript
document.getElementById("btn").addEventListener("click", correct);
const para = document.getElementById('paragraph');
let word = document.getElementById('paragraph').textContent;

function correct() {
    
    // Write the JavaScript to grab the message from the paragraph and correct its capitalisation.
    // It should read "Valentine's"
    // Render the corrected message to the DOM.
    let first_letter = word.charAt(0);    
    let rest = word.slice(1);  
    let a = first_letter.toUpperCase();
    let b = rest.toLowerCase();
    word = first_letter+rest;
    para.innerHTML = `${a+b}` ;     
}

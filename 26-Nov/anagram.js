var str = window.prompt("Enter the word");
var b = window.prompt("Enter the anagram");
var c;


const ReverseString = str => [...str].reverse().join('');

document.write(ReverseString(str))

c=ReverseString(str);

if( c==b ){
    console.log("Entered anagram is true");
}

else{
    console.log("Anagram entered is false");
}

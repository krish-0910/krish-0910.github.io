function fizzbuzz(n) {
let f = "fizz";
let b = "buzz";
let fb = "fizzbuzz";



if(n%15 == 0){
    document.write(fb+"\n"+"<br/><br/>");
}
else if(n%5 == 0){
    document.write(b+"\n"+"<br/><br/>");
}
else if(n%3 == 0){
    document.write(f+"\n"+"<br/><br/>");
} 
else {
    document.write(n+"\n"+"<br/><br/>");
}

}


function printnum() {
    var input = document.getElementById("numbox").value;
    alert(input);
    var i = parseInt(1);
for(i=1; i<=36; i++ ){
    fizzbuzz(i);
}
}
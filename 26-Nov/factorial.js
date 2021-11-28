var n = window.prompt("Enter the number for which factorial has to be calculated ");
var i=1 ;
var a = 1;
var f;
while( i<=n-1){
    
    
    i= i+1;
    a= a*(i);
}
console.log( "No. of times loop has repeated = ", i);
console.log( "Factorial =", a);

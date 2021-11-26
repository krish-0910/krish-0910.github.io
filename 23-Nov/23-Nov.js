var n = window.prompt(" Enter a number to check whether it's prime or not");

var i =2 ;

for (i=2; i<n; i++) {

    var a = n%i;
    
    if(a===0){
        console.log("The given number is not a prime number")
        break ;
        
    }
    else if (i===n-1){
        console.log(" The given number is prime number")
        break;
        
    }

}

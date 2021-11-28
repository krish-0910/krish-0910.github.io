const a = window.prompt("Enter the first number");
const b = window.prompt("Enter the second number");
const c = window.prompt("Enter the third number");

if(a>b && a>c){
    console.log("The largest number is "+ a);
}

else if ( b>c && b>a){
    console.log("The largest number is "+ b);
}

else if( c>a && c>b ){
    console.log("The largest number is "+ c);
}

else if( a==b && b==c ){
    console.log("All the values cannot be same");
}

else {
    console.log("No two values can be same refresh and try again");
}
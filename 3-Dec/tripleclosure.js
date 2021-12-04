function sum(num1) {
    var result = parseInt(num1),
        repeat = 0,
        fn = function (num2) {
            result += parseInt(num2);
            if (++repeat < 2) return fn;
            return parseInt(result);
        };
    return fn;
}
var a = window.prompt("Enter the first number");
var b = window.prompt("Enter the second number");
var c = window.prompt("Enter the third number");


console.log( "The sum of the numbers is "+" "+ sum(a)(b)(c) );
alert("The sum of the numbers is "+" "+ sum(a)(b)(c) );
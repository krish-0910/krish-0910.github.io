var a = " ";
var b = " ";
// var num1 = parseInt(a);
// var num2 = parseInt(b);

var calculator = {
    'product': function (a, b) {
        var result =   parseInt(a) * parseInt(b);
        return result;
    },
    'division': function (a, b) {
        var quotient = parseInt(a) / parseInt(b);
        return quotient;
    },
    'Addition': function (a, b) {
        var sum  = parseInt(a) + parseInt(b);
        return sum;
    },
    'difference': function (a,b) {
        var sub = parseInt(a) - parseInt(b);
        return sub;
    },
    'remainder': function (a,b) {
        var rem = parseInt(a) % parseInt(b);
        return rem;
    }
}

var x = window.prompt("Select the type of function you want to perform \n (1) Addition \n (2) Substraction \n (3) Multiplication \n (4) Division \n (5) Remainder"); 



    var first = window.prompt("Enter the first number");
    var second = window.prompt("Enter the second number");

    var add_result = calculator.Addition(first,second);
    var sub_result = calculator.difference(first,second);
    var mul_result = calculator.product(first,second);
    var div_result = calculator.division(first,second);
    var rem_result = calculator.remainder(first,second);

    if (x == 1){
        console.log("Sum is "+" "+add_result);
    }
    else if (x == 2){
        console.log("Difference is "+" "+sub_result);
    }
    else if (x == 3){
        console.log("Product is "+" "+mul_result);
    }
    else if (x == 4){
        console.log("Division is "+" "+sub_result);
    }
    else if (x == 5){
        console.log("Remainder is "+" "+rem_result);
    }
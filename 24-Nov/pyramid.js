var n = window.prompt("Enter no of rows to be printed in a pyramid"); 
    var a = "";
    var i;
    var j;
    var k;
    for (i = 1; i <= n; i++) {
      
      for (j = n; j > i; j--) {
        a = a+" ";
      }
      
      for ( k = 0; k < i * 2 - 1; k++) {
        a =a+ "*";
      }
      a = a+"\n";
    }
    console.log(a);
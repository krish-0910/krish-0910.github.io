function reverse(n) {
    let rev = 0;
    while (n != 0) {
        rev = (rev * 10) + (n % 10);
        n = Math.floor(n / 10);
    }
    return rev;
}
    
    function getSum(n) {
        n = reverse(n);
        let sumOdd = 0, sumEven = 0, c = 1;
 
        while (n != 0) {
 
        if (c % 2 == 0)
            sumEven += n % 10;
        else
            sumOdd += n % 10;
        n = Math.floor(n / 10);
        c++;
    }
  
    console.log("Sum odd = " + sumOdd);
    console.log("Sum even = " + sumEven);
}
      let num = window.prompt("Enter the number");
      
      getSum(num);
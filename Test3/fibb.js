var n = window.prompt(" Enter a max number to build a Fibbonachi series");
    var n1=0;
    var n2 = 1;
    var sum;
    var i;
    for (i = 0; i <= n; i++) 
    {
        
        if(i===0){
            console.log(n1);
            console.log(n2);
        }

        else{
            sum = n1 + n2;   
      
        n1 = n2; 
        n2 = sum;
            console.log(n2)
        }
    }
    
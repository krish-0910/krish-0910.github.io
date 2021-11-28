var n = window.prompt(" Enter a highest number to print pattern");
var i ;
var j ;
var k = "";

for( i=1; i<=n; i++ ){
    for( j=0;j<i; j++){
      k =k+"o";  
    }

    k =k+"\n";
}

for( i=1; i<=n; i++){
    for( j=0; j< n-i; j = j+1 ){
        k = k+"o";
    }
    k =k+"\n";
    
}

console.log(k);
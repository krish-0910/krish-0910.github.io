// Array.prototype.prime = function () {
//     let i;
//     let s;
//     this.forEach(e=>{
//         for(i=1;i<e;i++){
//           s= e%i;
//             if(s==0){
//                 return false;
//             }  
//              else{
//                  return true;
//}
//         }
//     })
// 

// }

Array.prototype.prime = function(){
    for(var i =0; i<this.length; i++){
        if(isprime(this[i])){
            document.write("TRUE - The given set of elements contain a prime number"+"<br><br>");
            return true;
        }
    }
    document.write("FALSE - The given set of elements do not contain prime number"+"<br><br>");
    return false;
}

const isprime = (x) => {
    if(x<=2){
        return true;
    }
    for (var i =2 ; i<x; i++){
        if(x%i==0) {
           
            return false;
           
        }
    }
    
    return true;
    
}

const test = (m) => {
    return console.log(m.prime());
}

let arr2 = [12, 7, 22];

test(arr2);



let arr = [10, 12, 21];

console.log(arr.prime());



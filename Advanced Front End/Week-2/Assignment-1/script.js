
const maximum = (...a) => {
    let i;
    let max = a[0];

    for (i = 1; i < a.length; i++){
        if (a[i] > max) 
                max = a[i]; 
    }
    return max;
}

const minimum = (...b) => {
    let i;
    let min = b[0];

    for(i = 1; i < b.length; i++ ){
        if(min > b[i])
            min = b[i];
    }
    return min ;
}


document.write("Largest in given arguments is " + maximum(17,8,15));

document.write("<br><br>");

document.write(" Open console to give custom input and verify ");

document.write("<br><br>");

document.write("Least in given arguments is " + minimum(-3,8,15));

document.write("<br><br>");

// Array.prototype.prime = function(c){
//     let i ;
//     c.array.forEach(element => {
//       for(i=1;i<element;i++){
//         if(element%i==0){
//             return false;
//         }
//         else{
//             return true;
//         }
//       }  
//     });

// }

// const arr1 = [10,30,21];
// console.log(arr1.prime());





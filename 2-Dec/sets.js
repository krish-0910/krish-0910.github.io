var i = 0;
var j = 0;
var k = 1;
// let sum = function(a){
// i = i+a;
// } 

let obj ={
    'sum' : function (a) {
        i = i+a;
    },
    'difference': function (b) {
        j = j-b;
    },
    'product': function (c) {
        k = k*c;
    }
}


let set_a = [ 2,4,6,8 ];
let set_b = [ 7,14,21,28];
let set_c = [ 9,18,27,36];

set_a.forEach(obj.sum);

console.log( "Sum of set-a elements :"+i );

set_a.forEach(obj.difference);

console.log("Difference of set-a elements :"+j);

set_a.forEach(obj.product);

console.log("Product of set-a elements :" + k);

set_b.forEach(obj.sum);

console.log( "Sum of set-b elements :"+i );
 
set_b.forEach(obj.difference);
 
console.log("Difference of set-b elements :"+j);

set_b.forEach(obj.product);

console.log("Product of set-b elements :" + k);

set_c.forEach(obj.sum);

console.log( "Sum of set-c elements :"+i );

set_c.forEach(obj.difference);

console.log("Difference of set-c elements :"+j);

set_c.forEach(obj.product);

console.log("Product of set-c elements :" + k);
Array.prototype.prime = function (a){

    let i;
    a.array.forEach(element = function() {
        for (i=1;i<element;i++){
            if(element%i==0){
                return false;
            }
            else{
                return true;
            }
        }
    });

}


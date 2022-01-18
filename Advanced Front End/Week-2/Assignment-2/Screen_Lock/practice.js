let i;
let t ;
const shownum = _ =>{
    t = document.getElementById('numinpt').value;
    for(i=0;i<=t;i++){
        
        var para = document.createElement("li");
        para.innerHTML=i;
        document.body.appendChild(para); 
        console.log(i)
        // if(i%2==0){
            
        // }
        // else{
        //     document.getElementsByTagName('li').classList.add('green');
        // }
    }
    document.getElementById('numarea').classList.remove('dnone');
    document.getElementById('numarea').classList.add('view');
    //console.log(t);    
}

const elem = document.getElementById("numinpt");

elem.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) { 
        event.preventDefault();
        shownum();
    }
  });

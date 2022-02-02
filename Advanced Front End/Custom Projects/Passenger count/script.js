const addbtn = document.getElementById('add');
const delbtn = document.getElementById('del');
const num = document.getElementById('pcount');
const saved = document.getElementById('entries');  
const savebtn = document.getElementById('save');  
const rstbtn = document.getElementById('rst');            

let i=0;


const addp =_=>{
    i+=1;
    num.innerHTML=i;
}
const delp=_=>{
    if(i==0){
        window.alert('No passengers to remove');
    }
    else{
    i-=1;
    num.innerHTML=i;
    }
}

const save =_=>{
    let entries =" "+ i+"-";
    saved.innerText+= entries;
}

const reset =_=>{
    i=0;
    num.innerHTML=0;
}
const resetall=_=>{
    window.location.reload();
}

addbtn.addEventListener('click',addp);
delbtn.addEventListener('click',delp);
savebtn.addEventListener('click',save);
rstbtn.addEventListener('dblclick',resetall);
rstbtn.addEventListener('click',reset);
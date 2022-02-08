const button = document.querySelector('#btn');
const input = document.querySelector('#input');
const list = document.querySelector('#list');
let array = [];
let i = 0;

const save =_=>{
    array.push(input.value);
    input.value=null;
    display();
}
const display =_=>{
    for(i;i<array.length;i++){
        let line = document.createElement('li');
        let link = document.createElement('a');
        let url = array[i];
        link.href= url;
        link.target = '_blank';
        console.log(url);
        link.textContent = array[i];
        //line.innerHTML = '<li>'+ array[i]+'</li>';
        
        list.append(line);
        line.append(link);
        localStorage.setItem(array[i],array[i]);
    }
    
}
const enter =(a)=>{
    if(a.key==='Enter'){
        save();
    }
}

const refesh =_=>{
    window.location.reload();
}

document.querySelector('#refresh').addEventListener('click',refesh);
button.addEventListener('click',save);
input.addEventListener('keypress',enter);
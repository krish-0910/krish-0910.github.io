const button = document.querySelector('#btn');
const input = document.querySelector('#input');
const list = document.querySelector('#list');
const inpt = document.getElementById('input');
let array = [];
let i = 0;

const add =_=>{
    let lines = '';
    array.push(inpt.value);
    for(i=0;i<array.length;i++){
        lines += `<li>
                    <a target="_blank" href= '${array[i]}'> 
                        ${array[i]}
                    </a>    
                  </li>`;
    }
    list.innerHTML = lines;
}

button.addEventListener('click',add);
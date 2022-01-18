const playbtn = document.getElementsByClassName('play')[0];
const lapbtn = document.getElementsByClassName('lapit')[0];
const resetbtn = document.getElementsByClassName('reset')[0];
const second = document.getElementsByClassName('seconds')[0];
const millisecond = document.getElementsByClassName('milli')[0];
const minute = document.getElementsByClassName('minutes')[0];
const laps = document.getElementsByClassName('laps')[0];

let secCounter = 0;
let milliCounter = 0;
let millisec;
let sec;
let min;
let minCounter = 0;
let isPlay = false;
let isReset = false;
let lapno = 0;

const toggle =_=>{
    lapbtn.classList.remove('dnone');
    resetbtn.classList.remove('dnone');
}

const play =_=>{
    if(!isPlay && !isReset){
        playbtn.innerHTML='||';
        min = setInterval(() => {
            if(secCounter === 60){
                secCounter=0;
            }
            minute.innerText = `${++minCounter} : `;
        }, 60000);    
        sec = setInterval(() => {
            if(secCounter === 60){
                secCounter=0;
            }
            second.innerText = `${++secCounter} . `;
        }, 1000);
        millisec = setInterval(() => {
            if(milliCounter === 100){
                milliCounter=0;
            }
            millisecond.innerText = `${++milliCounter}`;
        }, 100);
        isPlay = true;
    }
    else{
        playbtn.innerHTML= '▶';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(millisec);
        isPlay = false;
        isReset = false;
    }
    toggle();
}

const reset =_=>{
    isReset = true;
    play();
    lapbtn.classList.add('dnone');
    resetbtn.classList.add('dnone');
    second.innerHTML = '00 :';
    millisecond.innerHTML = '00';
    minute.innerHTML = '00 :';
}

const lap =_=>{
    const li = document.createElement('li');
    const sno = document.createElement('span');
    const timelapped = document.createElement('span');

    li.setAttribute('class', 'lap');
    sno.setAttribute('class', 'sno');
    timelapped.setAttribute('class', 'timelapped');

    timelapped.innerHTML= `${minCounter} : ${secCounter} : ${milliCounter}`;

    li.append(sno, timelapped);
    laps.append(li);  
    
    sno.innerText = `#${++lapno}`;

}

const clearall =_=>{
    window.location.reload();
}





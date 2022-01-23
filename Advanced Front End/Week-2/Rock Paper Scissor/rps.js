const player = document.getElementById('para');
const computer = document.getElementById('comppara');
const arr = ['🪨','📃','✂️'];
const result = document.getElementById('result');
const playerscore = document.getElementById('pscore');
const computerscore = document.getElementById('cscore');

let pscore = 0 ;
let cscore = 0 ;
let pvalue ;

const score = _ => {

    playerscore.innerHTML = `${'Player Score'+'='+pscore}`;
    computerscore.innerHTML = `${'Computer Score'+'='+cscore}`;
}

const random =(max)=>{
    return Math.floor(Math.random() * max);
    
}

let cvalue ;

const won =_=> {
    result.classList.remove('dnone');
    pscore += 1;
    score();
}

const draw =_=> {
    result.classList.remove('dnone');
    result.innerHTML = 'Draw !!';
    return 'Match Draw';
}

const loss =_=> {
    result.classList.remove('dnone');
    result.innerHTML = 'You lose !!';
    cscore += 1;
    score();
    return 'Player Lost';

}

const evaluation = _ =>{
    if(pvalue === cvalue){
        draw();
    }
    else if(pvalue == 0 && cvalue == 1){
        loss();
    }
    else if (pvalue == 1 && cvalue == 2){
        loss();
    }
    else if (pvalue == 2 && cvalue == 0){
        loss();
    }
    else{
        won();
    }
}



const comp =_=> {

    cvalue =  random(3);
    computer.innerHTML = arr[cvalue];
    evaluation();
}

const rock = _ =>{
    player.innerHTML= '🪨';
    pvalue = parseInt(0);
    comp();
}

const paper =_=>{
    player.innerHTML='📃';
    pvalue = parseInt(1);
    comp();
}

const scr = _ =>{
    player.innerHTML= '✂️';
    pvalue = parseInt(2);
    comp();
}

const rematch =_=> {
    //window.location.reload();
    player.innerHTML = null;
    computer.innerHTML = null;
    result.innerHTML = null;
}



const dc1 = document.getElementById('closedcard');
const dc2 = document.getElementById('visiblecard');
const pc1 = document.getElementById('card1');
const pc2 = document.getElementById('card2');
const deal = document.getElementById('hit');
const player = document.getElementById('pscore');
const dealer = document.getElementById('dscore');
const result = document.getElementById('result');
const restartdiv = document.getElementById('restartdiv');
const pcount = document.getElementById('pwincount');
const dcount = document.getElementById('dwincount');
const rstrt = document.getElementById('restartbtn');
//let playername = document.getElementById('plyrname').value;


const deck = ['Cards/2_of_clubs.svg','Cards/3_of_clubs.svg','Cards/4_of_clubs.svg','Cards/5_of_clubs.svg','Cards/6_of_clubs.svg','Cards/7_of_clubs.svg','Cards/8_of_clubs.svg','Cards/9_of_clubs.svg','Cards/10_of_clubs.svg','Cards/jack_of_clubs2.svg','Cards/queen_of_clubs2.svg','Cards/king_of_clubs2.svg','Cards/ace_of_clubs.svg',
              'Cards/2_of_spades.svg','Cards/3_of_spades.svg','Cards/4_of_spades.svg','Cards/5_of_spades.svg','Cards/6_of_spades.svg','Cards/7_of_spades.svg','Cards/8_of_spades.svg','Cards/9_of_spades.svg','Cards/10_of_spades.svg','Cards/jack_of_spades2.svg','Cards/queen_of_spades2.svg','Cards/king_of_spades2.svg','Cards/ace_of_spades2.svg',
              'Cards/2_of_hearts.svg','Cards/3_of_hearts.svg','Cards/4_of_hearts.svg','Cards/5_of_hearts.svg','Cards/6_of_hearts.svg','Cards/7_of_hearts.svg','Cards/8_of_hearts.svg','Cards/9_of_hearts.svg','Cards/10_of_hearts.svg','Cards/jack_of_hearts2.svg','Cards/queen_of_hearts2.svg','Cards/king_of_hearts2.svg','Cards/ace_of_hearts.svg',
              'Cards/2_of_diamonds.svg','Cards/3_of_diamonds.svg','Cards/4_of_diamonds.svg','Cards/5_of_diamonds.svg','Cards/6_of_diamonds.svg','Cards/7_of_diamonds.svg','Cards/8_of_diamonds.svg','Cards/9_of_diamonds.svg','Cards/10_of_diamonds.svg','Cards/jack_of_diamonds2.svg','Cards/queen_of_diamonds2.svg','Cards/king_of_diamonds2.svg','Cards/ace_of_diamonds.svg'];
const values =[2,3,4,5,6,7,8,9,10,10,10,10,11,
               2,3,4,5,6,7,8,9,10,10,10,10,11,
               2,3,4,5,6,7,8,9,10,10,10,10,11,
               2,3,4,5,6,7,8,9,10,10,10,10,11, ]
let a;
let b;
let c;
let d;
let avalue;
let bvalue;
let cvalue;
let dvalue;
let win;
let playerscore;
let dealerscore;
let pwins = 0;
let dwins = 0;

const random =(max)=>{
    return Math.floor(Math.random() * max);
}

const start =_=>{
 a = random(51);
 b = random(51);
 c = random(51);
 d = random(51);

while (a==b){
    b = random(51);
}
while (a==c || b==c){
    c = random(51);
}
while (a==d || b==d || c==d){
    d = random(51);
}

 avalue = values[a];
 bvalue = values[b];
 cvalue = values[c];
 dvalue = values[d];
 playerscore = cvalue+dvalue;
 dealerscore = avalue+bvalue;
 win = 21;

 game()
}

const game =_=>{
    deal.classList.remove('htibtn');
    deal.classList.add('dnone');
    dc1.src=deck[a];
    dc2.src=deck[b];
    pc1.src=deck[c];
    pc2.src=deck[d];
    player.innerHTML = `${" "+cvalue+" "+'+'+" "+dvalue+" "+'='+" "+playerscore}`;
    dealer.innerHTML = `${" "+avalue+" "+'+'+" "+bvalue+" "+'='+" "+dealerscore}`;
    let pdif = win-playerscore;
    let ddif = win-dealerscore;
    
    if(pdif > ddif){
        result.innerHTML = `${'You lost ! Better Luck next time !'}`;
        dwins +=1;
        pcount.innerHTML =`${'Player'+' '+'='+' '+pwins}`
        dcount.innerHTML =`${'Dealer'+' '+'='+' '+dwins}`
        
    }
    else if ( pdif == ddif){
        result.innerHTML = `${"It's a tie"}`;
    }
    else {
        result.innerHTML = `${'Congratulations ! You Won !'}`;
        pwins +=1; 
        pcount.innerHTML =`${'Player'+' '+'='+' '+pwins}`
        dcount.innerHTML =`${'Dealer'+' '+'='+' '+dwins}`
        
    }

    restartdiv.classList.remove('dnone');

    restartdiv.classList.add('btndiv');

}


const start_game =_=>{
    start();    
}
const restart =_=>{
    restartdiv.classList.remove('btndiv');
    restartdiv.classList.add('dnone');
    result.innerHTML = `${'_'}`;
    dc1.src='null.svg';
    dc2.src='null.svg';
    pc1.src='null.svg';
    pc2.src='null.svg';
    deal.classList.remove('dnone');
    deal.classList.add('htibtn');
    player.innerHTML = `${'_'}`;
    dealer.innerHTML = `${'_'}`;
    
}


deal.addEventListener("click",start_game);
rstrt.addEventListener('click',restart);
// console.log(playername); 


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


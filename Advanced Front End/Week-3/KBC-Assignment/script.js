const questions = [ 'A large increase in the number of fast-food restaurants in a community is most likely to result in:\n [Ans is c]',
                    'A person who starts a business to produce a new product in the marketplace is known as:  Ans is C', 
                    'An increase from 5% to 8% in the interest rates charged by banks would most likely encourage: ?  Ans is c', 
                    'For most people, the largest portion of their personal income comes from:  Ans is a' ];
const opta = ['Lower prices and higher quality', 
               'A manager.', 'Businesses to invest.', 'Wages and salaries from their jobs.'];
const optb = ['Higher prices and higher quality.', 'A bureaucrat.','People to purchase housing.','Interest from stocks and bonds they own.'];
const optc = ['Lower prices and lower quality.','An entrepreneur','People to save money.','Rent paid to them from property they own.'];
const optd = ['Don’t know'];
let qnum = parseInt(0);
let sec ;
let secCounter = 30;
const second = document.getElementById('spantmr')
const start = document.getElementById('strt');
document.getElementById('qno').innerText = qnum;
const qcontent = document.getElementById('ques');
const acon = document.getElementById('opta');
const bcon = document.getElementById('optb');                
const ccon = document.getElementById('optc');
const dcon = document.getElementById('optd');
let optvalue = '0' ;
let money = 0;
let result = {
    score : qnum*10, 
    prize : qnum*100,
}
const final =_=>{
    document.getElementById('fdiv').classList.remove('dnone');
    document.getElementById('fdiv').classList.add('result');
    document.getElementById('fdiv').innerHTML = `yor prize money is ${money}`;

}


const afn =_=>{
    optvalue = '1';
    eval();
}
const bfn =_=>{
    optvalue = '2';
    eval();
}
const cfn =_=>{
    optvalue = '3';
    eval();
}
const dfn =_=>{
    optvalue = '4';
    eval();
}
// console.log(result.prize);
// console.log(result.score);
console.log(questions.length);

const eval =_=>{
    if(qnum = 0 && optvalue=='3'){
        ccon.classList.remove('options');
        ccon.classList.add('true');
        result.score = 10;
        result.prize = 100;
        qnum += 1;
        optvalue = null;
        test();
    }
    else if(qnum = 1 && optvalue =='3') {
        ccon.classList.remove('options');
        ccon.classList.add('true');
        result.score = 20;
        result.prize = 200;
        qnum += 1;
        optvalue = null;
        test();
    }
    else if ( qnum = 2 && optvalue == '3' ){
        ccon.classList.remove('options');
        ccon.classList.add('true');
        result.score = 30;
        result.prize = 300;
        qnum += 1;
        optvalue = null;
        test();
    }
    else if (qnum = 3 && optvalue == '1'){
        acon.classList.remove('options');
        ccon.classList.add('true');
        result.score = 40;
        result.prize = 500;
        final (); 
    }
    else {
        final();
    }

}


const test = _ =>{

    money += 100;
    start.classList.remove('strtbtn');
    start.classList.add('dnone');
    secCounter = 30;
    qcontent.innerHTML=questions[qnum];
    acon.innerHTML= opta[qnum];
    bcon.innerHTML= optb[qnum];
    ccon.innerHTML= optc[qnum];
    dcon.innerHTML= optd[0];

    if(qnum>0){
        acon.classList.add('options');
        bcon.classList.add('options');
        ccon.classList.add('options');
        dcon.classList.add('options');
    }
    

    timer();
}

const hide=_=>{
    document.getElementById("strt").classList.add("dnone");
}

const timer =_=>{
    sec = setInterval(() => {
        if(secCounter === 00){
            qnum += 1;
            secCounter = 30;
            test();
        }
        second.innerText = `${--secCounter} `;
    }, 1000);
}

console.log(questions[0]);
console.log(questions[1]);
console.log(questions[2]);
console.log(questions[3]);
const questions = [];
const opta = [];
const optb = [];
const optc = [];
const optd = [];
let qnum = 0;

document.getElementById('qno').innerText = qnum;

//(qnum>0)?document.getElementById("strt").classList.add("dnone"):document.getElementById("strt").classList.add("strtbtn");

const hide=_=>{
    document.getElementById("strt").classList.add("dnone");
}

// var dt = new Date.getTime();
// dt.setminutes(dt.getminutes()+1);
// var deadline = new Date("Jan 17, 2022 16:23:25").getTime();
// //var deadline = dt;
// var x = setInterval(function timer () {
// var now = new Date().getTime();
// var t = deadline - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("spantmr").innerHTML = days + "d " 
// + hours + "h " + minutes + "m " + seconds + "s ";
//     if (t < 0) {
//         clearInterval(x);
//         document.getElementById("spantmr").innerHTML = "Time's Up";
//     }
// }, 1000);

// var deadline = new Date().getSeconds();
// deadline.setseconds(dt.getSeconds()+10);
// var x = setInterval(() => {
//     var now = new Date().getSeconds();
//     var t = deadline-now;
//     var seconds = Math.floor((t % (1000 * 60)) / 1000);
//     document.getElementById('spantmr').innerHTML = seconds+"s";
//     if(t<0) {
//         clearInterval(x);
//         document.getElementById("spantmr").innerHTML= "Time's up";
//     }

// }, 1000);

// var dt = new Date().getTime();
// console.log(dt)

let t ;

let timer = settimeout(() => {
    document.getElementById('spantmr').innerHTML=t;
    if(t=31){
        document.getElementById("spantmr").innerHTML= "Time's up";

    }
}, 1000);


for(t=0;t<=31;++t){
    tram();
}

let tram = setTimeout(() => {
    document.getElementById('spantmr').innerHTML=t;
    if(t=31){
        document.getElementById("spantmr").innerHTML= "Time's up";
        
    }
}, 1000);

// const search = document.getElementById('search');
// let all = document.getElementsByClassName('uniname');

// let i;

// search.addEventListener('keyup',function(event){
//     let searchQuery = event.target.value.toLowercase();

//     for(i=0;i<all.length;i++){
//         let cs = all[i].textContent.toLowerCase();

//         if(cs.includes(searchQuery)){
//             all[i].style.display='block';
//         }
//         else{
//             all[i].style.display = 'none';
//         }
//     }
// });
const inpt = document.getElementById('search');

let all = document.getElementsByClassName('uniname');

let i;

inpt.addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    
    

    for(i=0;i<all.length;i++){
        let currentname = all[i].textContent.toLowerCase();

        if(currentname.includes(searchQuery)){
            all[i].style.display = 'block';

        }
        else{
            all[i].style.display = 'none';
        }
    }
});

async function getdata() {
    var res= await fetch('https://meme-api.herokuapp.com/gimme');
    var data= await res.json();
    
    document.getElementById('view').src=data.preview[0];
    document.getElementById('view2').src=data.preview[1];
    document.getElementById('view3').src=data.preview[2];
    document.getElementById('view4').src=data.preview[3];
    console.log(data.url);
    
}


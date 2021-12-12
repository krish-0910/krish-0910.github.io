async function getdata() {
    var res= await fetch('https://meme-api.herokuapp.com/gimme');
    var data= await res.json();
    
    document.getElementById('view').src=data.preview[0];
    document.getElementById('url').innerText=data.url;
    console.log(data.url);
}

    
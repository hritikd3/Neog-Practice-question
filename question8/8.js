var output = document.querySelector("#output");
var btn = document.querySelector("#check");
var url = "https://unitube-server.herokuapp.com/playlists";

btn.addEventListener("click", ()=>{

    
    fetch(url)
    .then(res => res.json())
    .then(data =>
        {
            output.innerText = data.message;
        }
    )
    
})
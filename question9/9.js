var btn= document.querySelector('.btn')
var output=document.querySelector('.output')
var url="https://mystery-api.kushanksriraj.repl.co/get";

btn.addEventListener('click',()=>{

	fetch(url)
	.then(res=>{

		if(res.status===404)
{
	output.innerText="page not found"

}
else if(res.status===401){
	output.innerText="user not logged in"
}
else{
	output.innerText="succesfully logged in"
}

	})
}
)
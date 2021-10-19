var userInput=document.querySelector('.userInput')
var btn1=document.querySelector('.btn1')
var btn2=document.querySelector('.btn2')
var blue=document.querySelector('.blue')
var show=document.querySelector('.show')
blue.disabled="false"


btn1.addEventListener('click', ()=>{
	show.innerText= `${userInput.value}`
	 
})
btn2.addEventListener('click',()=>{
	show.innerText= `${userInput.value}`

})


blue.addEventListener('click',()=>{
	show.innerText= `${userInput.value}`
 
})

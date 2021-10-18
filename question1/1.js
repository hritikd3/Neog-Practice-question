var num1=document.querySelector('.num1')
var num2=document.querySelector('.num2')

var add= document.querySelector('#add')
var minus= document.querySelector('#minus')
var multi=document.querySelector('#multi')
var divide= document.querySelector('#divide')
var output=document.querySelector('.output')


 var ans=0;
add.addEventListener('click', ()=>{
	ans= Number(num1.value)+Number(num2.value);
	output.innerText= `Result is = ${ans}`
})



minus.addEventListener('click', ()=>{
	ans= Number(num1.value)-Number(num2.value);
	output.innerText= `Result is = ${ans}`
})

multi.addEventListener('click', ()=>{
	ans= Number(num1.value)*Number(num2.value);
	output.innerText= `Result is = ${ans}`
})

divide.addEventListener('click', ()=>{
	ans= Number(num1.value)/Number(num2.value);
	output.innerText= `Result is = ${ans}`
})

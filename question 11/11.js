var userInput=document.querySelector('.userInput')
var btn=document.querySelector('.btn')
var output=document.querySelector('.output')

btn.disabled= false;
btn.addEventListener('click',()=>{

var value =userInput.value

if(value.length<10)
{
 
  output.innerText= "value should be greater than 10"
  output.style.color="red"
  output.style.backgroundColor="black"
}
else{
  //  btn.disabled= true;
  output.innerText= "success"
  output.style.color="green"
  output.style.backgroundColor="black"
}


})
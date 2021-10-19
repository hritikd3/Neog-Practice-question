var userInput= document.querySelector('.userInput')
var btn1=document.querySelector('.btn1')
var btn2=document.querySelector('.btn2')
var show=document.querySelector('.show')

var size=32;

btn1.addEventListener('click',()=>{
    size=size+2;
  show.innerText= `${userInput.value}`;
  show.style.fontSize= `${size}px`;

})


btn2.addEventListener('click',()=>{
    size=size-2;
    show.innerText= `${userInput.value}`;
    show.style.fontSize= `${size}px`
})


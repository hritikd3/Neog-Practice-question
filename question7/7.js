var output=document.querySelector('.output')
var btn=document.querySelector('.btn')
var URL="https://api.funtranslations.com/translate/minion.json"
var postValue=URL+ "?text=hritik dangi"
btn.addEventListener('click',getData)
function getData (){
  fetch(postValue)
  .then(res=>res.json())
  .then(data=>displayData(data))
  
}
function displayData(data){
  output.innerText= (data.contents.translated).toUpperCase()
}
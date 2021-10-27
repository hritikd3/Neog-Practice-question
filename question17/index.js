//Question 17- Create a CLI app which would detect fake news. This app will take news as input and then source.//

//If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp".
 Can you extend this to include telegram as well? //

var readlineSync= require("readline-sync")


var news =readlineSync.question("hey what is the fake news")
var source=readlineSync.question("what are the sources?")

// source=source.toLowerCase();

if(source==="facebook"|| source==="instagram"|| source==="telegram"){
  console.log("its a fake news")
}else{
  console.log("you got a right news")
}
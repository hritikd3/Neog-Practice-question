var readlineSync= require('readline-sync');
var chalk=require('chalk');

var name="";
var unitTest=0;
var preFinal=0;
var finalMarks=0;
var total=0;
var highest=0;
var topper=0;

 for(var i=0;i<2;i++){
  name=readlineSync.question("what your name ") //hritik //jiya
  unitTest=readlineSync.question("your marks: ")//70 //60
  preFinal=readlineSync.question("your prefinal: ") //82 //60
  finalMarks=readlineSync.question("finalMarks : ") //90 //70
  total=Number(unitTest)+Number(preFinal)+Number(finalMarks); //70+82+90 ,, //60+60+70

console.log(chalk.green("your total marks are:")+total); //242 ,, //190
console.log(chalk.blue("the average is: "+ total/3 )) //80.66 ,, //63.33
console.log(chalk.red("===================="));

 if(total>highest){ //242> 0    //190>0
  highest=total; //242=242   //190=190
  topper=name; //topper= hritik
 }
 }
 console.log(chalk.red("the highest marks are : "+highest+ "and scored by:"+topper )) //highest marks are 242 and scored by hritik





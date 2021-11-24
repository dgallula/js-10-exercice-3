//  exercice 3 
const button1 = document.querySelector("button-id")
const button2 = document.querySelector("button-stop-id")


  function consoleLog() {
   console.log("start")
   let currentime = Date();
   setTimeout(()=> {
     console.log(currentime)
   },3000);
   console.log ("end ")
  }
   consoleLog()
 

setInterval(myFunction2, 1000);

 function myFunction2() {
  let d = new Date();
  document.getElementById("clock").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
   d.getSeconds();
}


  
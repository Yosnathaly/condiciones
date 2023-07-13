function valor1(){
 let val1 = document.querySelector("#num1").value;
 let val2 = document.querySelector("#num2").value;
 let val3 = document.querySelector("#num3").value;
 let total1= +val1 +val2 +val3;
 let span1=document.querySelector('#resultado1')
 
 
 if( total1 == 911){

   span1.innerHTML="Password 1 Correcto";

 }else if(total1 == 714){

   span1.innerHTML = "Password 2 Correcto";

 }else{

   span1.innerHTML = "Password Incorrecta";

 }
}
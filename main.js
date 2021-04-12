
var btn = document.getElementById("result");

btn.addEventListener('click',function(){

 var height = document.getElementById("h").value;
var weight =  document.getElementById("w").value;
if(height > 0 && weight > 0){
 var bmi = weight/(height/100*height/100);
var bmiround = bmi.toFixed();
 document.getElementById("answer").value = bmiround;
}else{
  document.getElementById("answer").value = " Incorrect Input";
}

})




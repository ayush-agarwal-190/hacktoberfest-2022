
function calculate(){
    var weight=document.querySelector(".Kgs").value;
    var height=document.querySelector(".Meters").value;
    document.getElementById("BMI").innerHTML=parseFloat(weight/(height*height)).toFixed(2);
}

function calculate(){
    var weight=document.querySelector(".Kgs").value;
    var height=document.querySelector(".Meters").value;
    document.getElementById("BMI").textContent="Your Body Mass Index is : "+parseFloat(weight/(height*height)).toFixed(2);
}
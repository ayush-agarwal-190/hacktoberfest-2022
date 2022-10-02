function Validate(email,phone) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var valPhone=/^\d{10}$/;
    if (email.value.match(validRegex) && phone.value.match(valPhone)) {
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Enter valid details");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }


  function Calculate_bmi(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var result = parseFloat(weight) /(parseFloat(height)/100)**2;

    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = "Your BMI is " + Math.floor(result);
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML = "Underweight";
        }
        else if(result < 25){
            document.getElementById("bmi-status").innerHTML = "Healthy";
        }
        else if(result < 30){
            document.getElementById("bmi-status").innerHTML = "Overweight";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "Obesity";
        }
    }
}

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

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

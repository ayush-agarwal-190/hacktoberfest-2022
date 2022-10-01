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
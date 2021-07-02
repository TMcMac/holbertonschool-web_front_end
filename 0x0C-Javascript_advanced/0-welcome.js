function welcome(firstName, lastName) {

    // combine to full name
    let fullName = firstName + " " + lastName;
    
    // Helper function to greet fullname
    function displayFullName() {
        alert( "Hello, " + fullName);
    }
  
    displayFullName();  
  }
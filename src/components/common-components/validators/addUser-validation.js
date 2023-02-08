const calculate_age = (inputDate) => {
    var today = new Date();
    var birthday = new Date(inputDate);
    var age = today.getTime() - birthday.getTime();
  
    return age;
  };
  
  const validation = (values) => {
    let errors = {
      username: "",
      firstname: "",
      lastname: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: "",
      date: "",
      gender: "",
      role: "",
      hotel: "",
      ok: ""
    };
  
    const errorMessage = "This field is required";
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
    //This big number is the 18 years converted in seconds
    const minimumAge = 568100000000;
  
    if (!values.firstname) {
      errors.firstname = errorMessage;
    } 
  
    if (!values.lastname) {
      errors.lastname = errorMessage;
    }
  
    if (!values.username) {
      errors.username = errorMessage;
    }
  
    if (!values.address) {
      errors.address = errorMessage;
    }
  
    if (!values.date) {
      errors.date = errorMessage;
    } else if (calculate_age(values.date) < minimumAge) {
      errors.date = "You're supposed to be at least 18 years old";
    }
  
    if (!values.gender) {
      errors.gender = errorMessage;
    }
  
    if (!values.email) {
      errors.email = errorMessage;
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Your email doesn't meet the requirements to be valid";
    } 
  
    if (!values.password) {
      errors.password = errorMessage;
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Your password should have:\n1 Upper and Lower letter, 1 digit, 1 special character and the length of 8";
    } 
  
    if (!values.confirmPassword) {
      errors.confirmPassword = errorMessage;
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Your passwords don't match";
    } 
    
    if (!values.role) {
        errors.role = errorMessage;
    }
    
    if (!values.hotel) {
        errors.hotel = errorMessage;
    }  

    if (Object.values(errors).find(value => value)) {
      errors.ok = false;
    } else {
      errors.ok = true;
    }
    
    return errors;
  };
  
  export default validation;
  
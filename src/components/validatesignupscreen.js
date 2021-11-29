    export default function validate(values) {
    let errors = {};
    
    if (!values.username) {
      errors.username = "username is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.username= "username is invalid";
      alert("username is not correct");
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password should be atleast of 8 characters";
      alert("password should have atleast 8 characters");
    }
    return errors;
  }
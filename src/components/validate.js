const validate = (inputs) => {
    
    
    const handleSubmit = (event) => { event.preventDefault();
    const validationErrors = validate(inputs); 
    const noErrors = Object.keys(validationErrors).length === 0; setErrors(validationErrors);
     if(noErrors){ console.log("Authenticated",inputs); }
     else{ console.log("errors try again",validationErrors); 
    } }
    
    //Email errors
   const errors = {};
   if (!inputs.username) {
       errors.username = 'Check User';
   } else if (
       !/^[a-zA-Z0-9]+$/i.test(inputs.email)
   ) {
       errors.username = 'Invalid Username ';
   }
 
   //Password Errors
   if(!inputs.password  || inputs.password.length<6){
       errors.password = 'Check Password'
   }
   return errors;
 }
 
 export default validate;
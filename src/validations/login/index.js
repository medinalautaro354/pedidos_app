import Validator from 'validator';
 
const validateInputs = ({email, password}) =>{
    debugger
    let errors = [];
    let isValid = true;
    if(Validator.isEmpty(email)){
        let email = {
            "email" : {
                "message": 'El campo es requerido.'
            }
        }
        errors.push(email);
    }

    if(Validator.isEmpty(password)){
        let password = {
            "password" : {
                "message": 'El campo es requerido.'
            }
        }
        errors.push(password);
    }

    if(errors.length !== 0){
        isValid = false;
    }

    return{
        errors,
        isValid
    }
}

export default validateInputs;
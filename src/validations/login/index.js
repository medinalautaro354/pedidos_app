import Validator from 'validator';
 
const validateInputs = ({email, password}) =>{
    let errors = [];
    let isValid = false;
    if(Validator.isEmpty(email)){
        errors.email = 'El campo es requerido.';
    }

    if(Validator.isEmpty(password)){
        errors.password = 'El campo es requerido.';
    }

    if(errors.length === 0 ){
        isValid = true;
    }

    return{
        errors,
        isValid
    }
}

export default validateInputs;
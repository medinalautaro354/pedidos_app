import React from 'react'
import {TextFieldStyled} from './styles';

const InputField = ({label, name, value, onChange, type }) =>{
    return(
        <TextFieldStyled 
            className = {name}
            value = {value}
            placeholder = {label}
            onChange = {onChange}
            name = {name}
            type = {type}
        />
    );
}

export default InputField;
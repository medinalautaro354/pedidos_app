import React from 'react';
import {InputPassword} from './styles';

import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

const InputPasswordField = ({label, name, value, onChange, type, onClick, onMouseDown, showPassword }) =>{
    return(
        <InputPassword 
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required={true}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
              onMouseDown={onMouseDown}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        />
    );
}

export default InputPasswordField;
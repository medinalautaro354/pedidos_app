import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import CircularProgress from '@material-ui/core/CircularProgress';

import {
  FormWrapper,
  FormContainer,
  EmailIconStyled,
  PasswordIcon,
  GridButton,
} from "./styles";
import InputField from "../InputField";
import InputPasswordField from '../InputPassword';

import {postLogin} from '../../redux/actions/login_actions';

import { Grid, Button, Icon, Input } from "@material-ui/core";
import validateInputs from "../../validations/login/index";

const FormLogin = ({isLoading}) => {

  const dispatch = useDispatch(); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: [],
    showPassword: false
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loginRequest = (e) => {
    e.preventDefault();

    if (validateForm()) {        
        let loginRequestDto = {
          email: formData.email,
          password: formData.password
        };

        dispatch(postLogin(loginRequestDto));
    }
  };

  const validateForm = () => {
    const { errors, isValid } = validateInputs(formData);

    if (!isValid) {
      handleSetErrors(errors);
    }

    return isValid;
  };

  const handleSetErrors = (errors) => {
    setFormData({
      ...formData,
      errors: errors
    });
  };

  const handleClickShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormContainer onSubmit={loginRequest}>
      <FormWrapper>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
          <EmailIconStyled className={"icon"} />
          <InputField
            label={"Email"}
            name={"email"}
            value={formData.email}
            onChange={handleInputChange}
            type={"email"}
          />
        </Grid>
        <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
          <PasswordIcon className={"icon"} />
          <InputPasswordField
            label={"Contraseña"}
            name={"password"}
            value={formData.password}
            onChange={handleInputChange}
            type={formData.showPassword ? 'text' : 'password'}
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            showPassword={formData.showPassword}
          />
        </Grid>
        <GridButton>
          <Button
            variant="contained"
            color="default"
            endIcon={<Icon>send</Icon>}
            type='submit'
          >
            Ingresar
          </Button>
        </GridButton>
        {isLoading ? <CircularProgress/> : null}
      </FormWrapper>
    </FormContainer>
  );
};

export default FormLogin;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";

import loginIlustration from "../../assets/backgrounds/loginIlustration.svg";
import icon from "../../assets/icons/icon.svg";

import { isLoginLoading, loginResult } from "../../redux/selectors/index";

import { Container, Image, LogoWrapper, Logo, LoginWrapper } from "./styles";
import FormLogin from "../../components/FormLogin";

const Login = ({history}) => {
  const isLoading = useSelector((state) => isLoginLoading(state));
  const loginResponse = useSelector((state) => loginResult(state));

  const showPopUpError = () => {
    if (loginResponse !== undefined) {
      if (!loginResponse.ok) {
        swal("Error", loginResponse.err.message, "error");
      }else{
        
        localStorage.setItem('user', JSON.stringify(loginResponse.user));
        localStorage.setItem('token', JSON.stringify(loginResponse.token));
        history.push('/');
      }
    }
  };

  useEffect(() => {
    showPopUpError();
  }, [loginResponse]);

  return (
    <Container>
      <div>
        <Image src={loginIlustration} />
      </div>
      <LoginWrapper>
        <LogoWrapper>
          <Logo src={icon} />
        </LogoWrapper>
        <React.Fragment>
          <FormLogin isLoading={isLoading}/>
        </React.Fragment>
      </LoginWrapper>
    </Container>
  );
};

export default Login;

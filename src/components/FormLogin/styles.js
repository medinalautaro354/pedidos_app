import styled from "styled-components";
import mediaQueries from "../../config/media-queries";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Grid } from "@material-ui/core";

export const FormContainer = styled.form`
  display: flex;
  width: 80%;
  height: 275px;
  border-radius: 10px;
  background: rgb(245, 134, 100);
  background: linear-gradient(
    180deg,
    rgba(245, 134, 100, 1) 0%,
    rgba(63, 61, 86, 1) 100%
  );
`;

export const FormWrapper = styled.div`
  height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: start;
`;
export const EmailIconStyled = styled(EmailIcon)`
  margin: 10px;
`;

export const PasswordIcon = styled(VpnKeyIcon)`
  margin: 10px;
`;

export const GridButton = styled(Grid)``;

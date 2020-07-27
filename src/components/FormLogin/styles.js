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
  background: rgba(245, 134, 100, 1);
`;

export const FormWrapper = styled.div`
  height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: center;
    align-items: center;
    border-color:rgba(63, 61, 86, 1);
    border-width: 30px;
`;
export const EmailIconStyled = styled(EmailIcon)`
  margin: 10px;
`;

export const PasswordIcon = styled(VpnKeyIcon)`
  margin: 10px;
`;

export const GridButton = styled(Grid)``;

import styled from 'styled-components';
import mediaQueries from '../../config/media-queries';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mediaQueries.mobile`
  display: none;
`};
`;

export const LogoWrapper = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Logo = styled.img`
  width: 170px;
  margin: 100px 0px 100px auto;
`

export const LoginWrapper = styled.div`
  position: relative;
  min-width: 480px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-left: auto;
  ${mediaQueries.mobile`
  width: 100%;
`};
`;


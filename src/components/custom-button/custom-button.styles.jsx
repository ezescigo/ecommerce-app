import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background-color: #424444;
  color: white;
  border: none;

  &:hover {
    background-color: #221f1f;
    color: #f0e9e9;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4; // Google blue
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: #383737;
  border: 1px solid #242323;

  &:hover {
    background-color: #2e2d2d;
    color: white;
    border: none;
  }
`;

const getButtonSize = props => {
  if (props.large) {
    return css`width: 100%;`;
  }
}

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } 
  
  return props.inverted ? invertedButtonStyles : ButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 130px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  margin: 10px 0 10px 0;
  font-size: 13px;
  text-transform: uppercase;
  font-family: 'Roboto', 'Open Sans';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.2s ease-in-out;

  ${getButtonStyles};
  ${getButtonSize};
`;
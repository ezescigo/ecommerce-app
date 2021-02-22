import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
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
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } 
  
  return props.inverted ? invertedButtonStyles : ButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 130px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  margin: 10px 0 10px 0;
  font-size: 13px;
  text-transform: uppercase;
  font-family: 'Piazzolla';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 5px;

  ${getButtonStyles};
`;
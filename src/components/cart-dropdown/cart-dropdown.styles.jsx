import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    height: 0;
    opacity: 0;
  }

  to {
    height: 85vh;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    height: 85vh;
    opacity: 1;
  }

  to {
    height: 0;
    opacity: 0;
  }
`;

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  width: 400px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid rgba(10, 34, 30, 0.466);
  border-radius: 10px;
  padding: 0;
  background-color: whitesmoke;
  z-index: 20;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
  animation: ${props => props.hidden ? fadeOut : fadeIn} 0.2s linear;
  transition: visibility 0.2s linear;
`;
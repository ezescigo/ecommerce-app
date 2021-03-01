import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  top: 0;
  position: fixed;
  height: auto;
  width: 100%;
  display: block;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 20px;
  padding: 15px 10px 10px 10px;
  background-color: transparent;
  z-index: 10;


  transition: all 0.3s ease-in-out;

  :hover {
    background-color: rgba(255, 255, 255, 0.95);
    /* box-shadow: rgba(50, 50, 93, 0.3) 0px 50px 100px -20px, rgba(0, 0, 0, 0.4) 0px 30px 60px -30px, rgba(10, 37, 64, 0.45) 0px -2px 6px 0px inset; */
    /* -moz-box-shadow:    inset  0 -10px 20px -10px grey;
    -webkit-box-shadow: inset  0 -10px 20px -10px grey; */
  }

  ${({ styled }) => styled
  ? css`background-color: rgba(41, 41, 41, 0.95);
        border-bottom: 1px white solid;`
  : ''}
`;

export const LogoContainer = styled(Link)`
  position: relative;
  margin: auto 15px;
  height: 100%;
  width: auto;
  display: flex;
    align-items: center;
    justify-content: center;

  text-align: center;
  -webkit-text-stroke: 0.45px;
  // or
  -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
  // or
  text-shadow: #fff 0px 1px 1px;

  ${HeaderContainer}:hover & {
    text-shadow: #363434 0px 1px 1px;
  }
`;

export const LogoText = styled.span`
  margin: auto;
  color: #ffffff ;
  font-family: 'Piazzola';
  font-weight: bold;
  font-size: 40px;
  text-shadow: 0.5px 0.5px 0.5px #cfc0c0;
  transition: all 0.5s ease;
  font-size: ${({ isXsDevice, isMobile }) => 
    isMobile ? (isXsDevice ? '18px' : '26px') : '52px'};

  ${HeaderContainer}:hover & {
    color: #5a5555 ;
    text-shadow: 0.5px 0.5px 0.5px #ced1d0, 1px 1px 1px grey; 
  }
`;

export const OptionsContainerTop = styled.div`
  position: relative;
  margin-bottom: 30px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const OptionsPanel = styled.div`
  position: relative;
  width: auto;
  height: 100%;
  margin-right: 0;
  width: 350px;
  /* margin-left: auto; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1; // To centering Logo.
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const OptionLink = styled(Link)`
  padding: 5px 0px;
  margin: auto 15px;
  cursor: pointer;
  font-size: 18px;
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }

  ${HeaderContainer}:hover & {
    color: #312f2f ;
    text-shadow: 0.5px 0.5px 0.5px #ced1d0;
  }
`;

export const NavbarContainer = styled.div`
  width: 75%;
  min-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 10px;
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

export const NavbarItem = styled.div`
  flex: 1;
  margin: 0 25px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  letter-spacing: 0.1em;
  font-family: 'Piazzola';
  -webkit-text-stroke: 0.45px;
  // or
  -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
  // or
  text-shadow: #646161 0px 0.5px 0.5px;

  :nth-child(3) {
    flex: 2;
    max-width: 140px;
  }

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1px;
    border-bottom: 1px solid grey;
    transition: all 0.2s linear;
  }

  ${HeaderContainer}:hover & {
    color: #383636 ;
    text-shadow: 0.5px 0.5px 0.5px #464747; 

    /* ${({ active }) => active
      ? css`border: 1px solid black;`
      : ''}; */
  }

  
`;

export const NavbarMenuContainer = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  padding: 20px 10px;
  transition: all 0.3s ease-in-out;

`;

export const NavbarMenuItem = styled.div`
  cursor: pointer;
  letter-spacing: 0.1em;
  font-family: 'Piazzola';
  font-size: 18px;
  -webkit-text-stroke: 0.45px;
  // or
  -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
  // or
  text-shadow: #646161 0px 0.5px 0.5px;
  margin: 10px;
`;
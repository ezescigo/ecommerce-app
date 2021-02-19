import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';



const PARAMS = {
  main_bg: '#1BBC9B',
  nav_color: '#524338',
  nav_bg_active:  '#D2527F',
  screen_bg: '#D2527F',
  duration: '300ms',
  ease: 'ease-in-out',
};

export const HeaderContainer = styled.div`
  top: 0;
  position: fixed;
  height: 75px;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px 10px 10px 10px;
  background-color: white;
  z-index: 10;
`;

export const OptionsContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  padding: 10px;
  width: 300px;
`;

export const NavContainer = styled.div`
  display: block;
  width: 300px;
  z-index: 200; 
`;

export const NavButton = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 0px 10px 0px 5px;
  align-items: center;
  justify-content: center;
  z-index: 200; 

  &:focus, &:active {
    outline: none;
  }
`;

export const NavIcon = styled.span`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 5px;
  top: 15px;
  background-color: ${PARAMS.nav_color};
  transition-property: background-color, transform;
  transition-duration: ${PARAMS.duration};
  ${({ open }) => open ? css`background: rgba(0,0,0,0.0);` : ''};

  &:before,
  &:after {
    content: '';
    display: block;
    width: 30px;
    height: 5px;
    position: absolute;
    background: ${PARAMS.nav_color};
    transition-property: margin, transform;
    transition-duration: ${PARAMS.duration};
  }

  ${
    ({ open }) => ( open
      ? (css`
        &:before {
          margin-top: 0;
          transform: rotate(45deg);
        };
        &:after {
          margin-top: 0;
          transform: rotate(-45deg);
        };
      `) : (css`
        &:before {
          margin-top: -10px;
          transform: rotate(0);
        };
        &:after {
          margin-top: 10px;
          transform: rotate(0);
        };
      `)
    )
  };
`;

export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  width: 70px;
  padding: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
  flex: 2;
`;

export const SlideNavBar = styled.nav`
  width: 100%;
  height: 100vh;
  padding-top: 75px;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  top: 0;
  left: 0;
  transition: transform 0.3s ${PARAMS.ease};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  background-color: white;
  opacity: 1;
  z-index: 10;
`;

export const OptionLink = styled(Link)`
  padding: 5px 0px;
  margin: 20px 15px;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  color: ${PARAMS.nav_color};
  text-decoration: none;

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

  &:hover {
    opacity: 0.9;
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }
`;
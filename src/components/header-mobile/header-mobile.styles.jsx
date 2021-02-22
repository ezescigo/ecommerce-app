import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';



const PARAMS = {
  main_bg: '#1BBC9B',
  nav_color: '#C5F2E7',
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
  align-content: center;
  margin-bottom: 20px;
  padding: 10px 10px 10px 10px;
  background-color: rgba(43, 132, 112, 0.8);
  z-index: 10;
  box-shadow: rgba(43, 132, 112, 0.9) 10px 35px 30px -5px inset, rgba(0, 0, 0, 0.3) 0px 18px 30px -18px inset, rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export const NavContainer = styled.div`
  display: block;
  width: auto;
  z-index: 200; 
`;

export const NavButton = styled(Link)`
  display: inline-block;
  position: relative;
  padding-left: 15px;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 200; 
  transition: all 0.2s linear;

  &:focus, &:active {
    outline: none;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const NavIcon = styled.span`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 4px;
  top: 13px;
  border-radius: 3px;
  background-color: ${PARAMS.nav_color};
  transition-property: background-color, transform;
  transition-duration: ${PARAMS.duration};
  ${({ open }) => open ? css`background: rgba(0,0,0,0.0);` : ''};

  &:before,
  &:after {
    content: '';
    display: block;
    width: 30px;
    height: 4px;
    position: absolute;
    border-radius: 3px;
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
          height: 5px;
        };
        &:after {
          margin-top: 0;
          transform: rotate(-45deg);
          height: 5px;
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
  background-color: rgba(43, 132, 112, 0.85);
  opacity: 1;
  z-index: 10;
`;

export const OptionsContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-content: center;
  width: auto;
  flex-grow: 2;
  
`;

export const OptionLink = styled(Link)`
  display: flex;
  width: auto;
  padding: 5px;
  margin: auto;
  margin-left: 5px;
  margin-right: 5px;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  color: ${PARAMS.nav_color};
  text-decoration: none;
  text-align: center;
  transition: all 0.2s linear;

  .navbar-icon {
    vertical-align: top;
  }

  .item-count {
    position: relative;
    font-size: 13px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    letter-spacing: 0.05em;

  }

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    bottom: 0;
    left: 50%;
    width: 0;
    transition: all 0.2s linear;
  }

  &:hover {
    opacity: 0.5;
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }
`;
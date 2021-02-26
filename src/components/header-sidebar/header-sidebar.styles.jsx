import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const PARAMS = {
  main_bg: '#1BBC9B',
  nav_color: '#343535',
  nav_bg_active:  '#D2527F',
  screen_bg: '#D2527F',
  duration: '300ms',
  ease: 'ease-in-out',
};

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
          background-color: whitesmoke;
        };
        &:after {
          margin-top: 0;
          transform: rotate(-45deg);
          height: 5px;
          background-color: whitesmoke;
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
  width: 300px;
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
  background-color: rgb(41, 43, 42);
  opacity: 1;
  z-index: 10;
  border-radius: 8px;
`
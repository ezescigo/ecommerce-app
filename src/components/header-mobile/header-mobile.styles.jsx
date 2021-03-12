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
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 10;
  -moz-box-shadow:    inset  0 -10px 20px -10px grey;
  -webkit-box-shadow: inset  0 -10px 20px -10px grey;
  box-shadow: rgba(50, 50, 93, 0.3) 0px 50px 100px -20px, rgba(0, 0, 0, 0.4) 0px 30px 60px -30px, rgba(10, 37, 64, 0.45) 0px -2px 6px 0px inset;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: auto;
  display: flex;
  align-content: center;
  text-align: center;
  margin-left: 20px;
  -webkit-text-stroke: 0.45px;
  // or
  -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
  // or
  text-shadow: #fff 0px 1px 1px;
`;

export const LogoText = styled.span`
  margin: auto;
  color: #5a5555 ;
  font-family: 'Piazzola';
  font-weight: bold;
  text-shadow: 0.5px 0.5px 0.5px #4c5250, 1px 1px 1px grey; 
  transition: all 0.5s ease;
  font-size: ${({ isxsdevice }) => isxsdevice ? '18px' : '26px'};
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

  .sign-salute {
    margin-top: 12px !important;
    margin-right: 10px !important;
    /* line-height: 25px; */
  }

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

  .cart-dropdown-enter {
    opacity: 0;
    transform: scale(0.9);
  /* height: 0px; */

  .cart-dropdown-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
    /* height: 100%;
    transition: height 0.3s ease;
    -webkit-transition: height 0.3s ease; */
  }
  .cart-dropdown-exit {
    opacity: 1;
    }

  .cart-dropdown-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
    /* height: 0px;
    transition: height 0.3s ease;
    -webkit-transition: height 0.3s ease; */
  }
}
`;
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
  box-shadow:        inset  0 -10px 20px -10px grey;
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
`;
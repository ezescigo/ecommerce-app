import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  top: 0;
  position: fixed;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 10px 10px 0 10px;
  background-color: white;
  z-index: 10;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 5px 0px;
  margin: auto 15px;
  cursor: pointer;
  font-size: 18px;
  position: relative;

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
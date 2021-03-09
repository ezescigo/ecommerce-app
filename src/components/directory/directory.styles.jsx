import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DirectoryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 75px;
  @media (min-width: 600px) {
    margin-top: 0px;
  }
`
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  @media (max-width: 1100px) {
    object-fit: fill;
  }
`
export const ShopNowButton = styled(Link)`
  position: absolute;
  display:inline-block;
  margin: auto;
  top:0;
  right:0;
  bottom:0;
  left:0;
  height: 80px;
  width: 180px;
  text-align: center;
  background-color: transparent;
  color: #e9d7d7;
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid white;
  padding: 25px 10px;
  top: 70%;
  
  z-index: 5;
  transition: all 0.3s ease-in-out;

  &:active {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`
  
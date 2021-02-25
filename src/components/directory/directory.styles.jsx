import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DirectoryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 75px;
`
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`
export const ShopNowButton = styled(Link)`
  position: relative;
  background-color: whitesmoke;
  color: #6b6868;
  text-shadow: 1px 3px 3px #a09898;
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: rgba(255, 255, 255, 0.76) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding: 20px 40px;
  top: 50%;
  margin: 0 auto;
  z-index: 5;
  transition: all 0.3s ease-in-out;

  &:active {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`
  
import styled, {css} from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

const handleHover = () => {
  let isHovered = true;
}

export const CollectionItemContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  transition: 0.5s ease-in-out;

  .fav-icon {
    display: flex;
  }
  .image {
      background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  }

  &:hover {
    .image {
      background-image: ${props => props.imageUrlAlt ? `url(${props.imageUrlAlt})` : `url(${props.imageUrl})`}
      }}
    button {
      display: flex;
    }
    .fav-icon {
      display: flex;
    }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 235px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  
  transition: 0.5s ease;

  &:hover {
    
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: auto;
  text-align: right;
`;
import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
  transition: 0.5s ease;
  background-image: url(${({ imageUrl }) => `${imageUrl}`});
`;

export const CollectionItemContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  border-radius: 2px;
  transition: all 0.5s ease-in-out;


  .fav-icon {
    display: none;
  }
  .image {
      background-image: ${({ imageUrl }) => `${imageUrl}`};
      background-color: white;
  }

  &:hover {
    ${BackgroundImage} {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;}

    button {
      display: flex;
    }
    .fav-icon {
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 235px;
  display: none;
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
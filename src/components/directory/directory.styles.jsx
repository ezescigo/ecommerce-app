import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`



  
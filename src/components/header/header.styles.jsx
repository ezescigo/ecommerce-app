import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  color: whitesmoke ;
  font-family: 'Piazzola';
  font-weight: bold;
  text-shadow: 0.5px 0.5px 0.5px rgb(127,195,179), 1px 1px 1px grey; 
  transition: all 0.5s ease;
  font-size: ${({ isXsDevice }) => isXsDevice ? '18px' : '26px'};
`;
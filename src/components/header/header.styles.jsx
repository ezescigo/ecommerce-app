import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 5px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
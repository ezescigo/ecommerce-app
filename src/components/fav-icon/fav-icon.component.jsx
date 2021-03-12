import React from 'react';

import { FavIconContainer } from './fav-icon.styles';

import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

const FavIcon = ({ show, onClick, isFav }) => (
  <FavIconContainer
  onClick={onClick}
  isFav={isFav}
  style={{ display: show ? 'flex' : isFav ? 'flex' : 'none' }}>
    {(isFav)
    ? <RiHeartFill size={28} />
    : <RiHeartLine size={28} />
    }
  </FavIconContainer>
);

export default FavIcon;

// ? <FavIconOn className='fav-icon' />
//     : <FavIconOff className='fav-icon' />
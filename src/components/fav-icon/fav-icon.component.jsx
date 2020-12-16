import React from 'react';

import { FavIconContainer } from './fav-icon.styles';
import { ReactComponent as FavIconOff } from '../../assets/favorite.svg';
import { ReactComponent as FavIconOn } from '../../assets/favorite-on.svg';

const FavIcon = ({ onClick, isFav }) => (
  <FavIconContainer onClick={onClick} isFav={isFav}>
    {(isFav)
    ? <FavIconOn className='fav-icon' />
    : <FavIconOff className='fav-icon' />}
  </FavIconContainer>
);

export default FavIcon;
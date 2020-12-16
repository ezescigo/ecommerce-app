import React, { useState, useLayoutEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { toggleFavWishlist } from '../../redux/wishlist/wishlist.actions';

import FavIcon from '../fav-icon/fav-icon.component';

import { CollectionItemContainer, CollectionFooterContainer, BackgroundImage, NameContainer, PriceContainer, AddButton } from './collection-item.styles';

const CollectionItem = ({ item, addItem, toggleFav, fav }) => {
  const { name, price, imageUrl } = item;
  const firstUpdate = useRef(true);
  const [isFav, setFav] = useState(fav);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    };
    toggleFav(item);
    }, [isFav]);

  console.log('fav', fav);
  console.log('isFav', isFav);
  console.log('load item');

  return (
  <CollectionItemContainer isFav={isFav}>
    <BackgroundImage className='image' imageUrl={imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>${price}</PriceContainer>
    </CollectionFooterContainer>
    <FavIcon className='fav-icon' isFav={isFav} onClick={() => setFav(!isFav) } />
    <AddButton inverted onClick={() => addItem(item)}>Add to cart</AddButton>
  </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  toggleFav: item => dispatch(toggleFavWishlist(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);


// <FavIconContainer isFav onClick={() => setFav(!isFav)}>
// <FavIconOn className='fav-icon' />
// </FavIconContainer>
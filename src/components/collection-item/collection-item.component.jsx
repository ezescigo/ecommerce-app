import React, { useState, useLayoutEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addItem } from '../../redux/cart/cart.actions';
import { toggleFavWishlist } from '../../redux/wishlist/wishlist.actions';
import { selectWishlistItems } from '../../redux/wishlist/wishlist.selectors';

import { ReactComponent as FavoriteIcon } from '../../assets/favorite.svg';

import { CollectionItemContainer, CollectionFooterContainer, FavIconContainer, BackgroundImage, NameContainer, PriceContainer, AddButton } from './collection-item.styles';

const CollectionItem = ({ item, addItem, toggleFav, fav }) => {
  const { id, name, price, imageUrl } = item;
  const firstUpdate = useRef(true);

  const [isFav, setFav] = useState({
      isFav: fav
  });

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    };
    toggleFav(item);
    }, [isFav]);

  console.log('load item');

  return (
  <CollectionItemContainer>
    <BackgroundImage className='image' imageUrl={imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>${price}</PriceContainer>
    </CollectionFooterContainer>
    
    {isFav
      ? (
        <FavIconContainer onClick={() => setFav(!isFav)}>
          <FavoriteIcon className='fav-icon' />
        </FavIconContainer>
      ) : (
        <button onClick={() => setFav(!isFav)}>Es Fav</button>
      )
    }
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
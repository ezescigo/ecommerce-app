import React, { useState, useLayoutEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { addItem } from '../../redux/cart/cart.actions';
import { toggleWishlistItem, undo, updateWishlist } from '../../redux/wishlist/wishlist.actions';

import FavIcon from '../fav-icon/fav-icon.component';
import Undo from '../undo-toast/undo-toast.component';

import { CollectionItemContainer, CollectionFooterContainer, BackgroundImage, NameContainer, PriceContainer, AddButton } from './collection-item.styles';

const CollectionItem = ({ item, fav, addItem, toggleFav, updateWishlist }) => {
  const { name, price, imageUrl } = item;
  const [isFav, setFav] = useState();
  const firstUpdate = useRef(true);
  
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      setFav(fav);
      firstUpdate.current = false;
    }
  }, []);

  console.log('inicial', isFav);

  const undo = () => {
    setFav(currentIsFav => !currentIsFav);
  };

  const handleOnClick = () => {
    setFav(currentIsFav => !currentIsFav);
    toggleFav(item);
    const toastId = toast(
      <Undo message={'asd'} item={item} onUndo={() => undo()} />,
      {onClose: () => updateWishlist()}
    );
  };

  console.log('return', isFav);

  return (
  <CollectionItemContainer isFav={isFav}>
    <BackgroundImage className='image' imageUrl={imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>${price}</PriceContainer>
    </CollectionFooterContainer>
    <FavIcon className='fav-icon' isFav={isFav} onClick={handleOnClick} />
    <AddButton inverted onClick={() => addItem(item)}>Add to cart</AddButton>
  </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  toggleFav: item => dispatch(toggleWishlistItem(item)),
  updateWishlist: () => dispatch(updateWishlist()),
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
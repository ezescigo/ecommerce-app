import React, { useState, useLayoutEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { addItem, openCartDropdown } from '../../redux/cart/cart.actions';
import { toggleWishlistItem, updateWishlist } from '../../redux/wishlist/wishlist.actions';

import FavIcon from '../fav-icon/fav-icon.component';
import Undo from '../undo-toast/undo-toast.component';

import { CollectionItemContainer, CollectionFooterContainer, BackgroundImage, NameContainer, PriceContainer, AddButton } from './collection-item.styles';

const CollectionItem = ({ item, fav, addItem, toggleFav, updateWishlist, openCartDropdown }) => {
  const { name, price, imageUrl } = item;
  const [isFav, setFav] = useState();
  const [isDisabled, setDisabled] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const firstUpdate = useRef(true);
  
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      setFav(fav);
      setDisabled(false);
      firstUpdate.current = false;
    }
  }, []);

  const undo = () => {
    setFav(currentIsFav => !currentIsFav);
  };

  const handleOnHover = hover => {
    setIsHovered(hover);
  }

  const handleOnClickFav = () => {
    if (isDisabled === true) {
      return ;
    } else {
      setDisabled(true);
      setFav(currentIsFav => !currentIsFav);
      toggleFav(item);
      toast(
        <Undo message={isFav} item={item} onUndo={() => undo()} />,
        {onClose: () => {
          updateWishlist();
          setDisabled(false)}
        }
      );
    }
  };

  const handleOnClickAdd = (item) => {
    openCartDropdown();
    addItem(item);
  }

  return (
  <CollectionItemContainer
    isFav={isFav}
    onMouseEnter={() => handleOnHover(true)}
    onMouseLeave={() => handleOnHover(false)}>
    <BackgroundImage imageUrl={imageUrl} className='image' />
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>${price}</PriceContainer>
    </CollectionFooterContainer>
    <FavIcon show={isHovered} className='fav-icon' isFav={isFav} onClick={handleOnClickFav} disabled={isDisabled}/>
    <AddButton inverted onClick={() => handleOnClickAdd(item)}>Add to cart</AddButton>
  </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  toggleFav: item => dispatch(toggleWishlistItem(item)),
  updateWishlist: () => dispatch(updateWishlist()),
  openCartDropdown: () => dispatch(openCartDropdown())
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { wishlist } from '../../redux/wishlist/wishlist.actions';

import { CollectionItemContainer, CollectionFooterContainer, BackgroundImage, NameContainer, PriceContainer, AddButton } from './collection-item.styles';

const CollectionItem = ({ item, addItem, wishlist}) => {
  const { name, price, imageUrl} = item;
  return (
  <CollectionItemContainer>
    <BackgroundImage className='image' imageUrl={imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>${price}</PriceContainer>
      <button onClick={() => wishlist(item)}>Fav</button>
    </CollectionFooterContainer>
    <AddButton inverted onClick={() => addItem(item)}>Add to cart</AddButton>
  </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  wishlist: item => dispatch(wishlist(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
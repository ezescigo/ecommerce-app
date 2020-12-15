import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectWishlistItems } from '../../redux/wishlist/wishlist.selectors';
import { clearWishlist } from '../../redux/wishlist/wishlist.actions';

import CollectionItem from '../../components/collection-item/collection-item.component';

const WishlistPage = ({ wishlist, dispatch }) => {

  return (
    <div className='wishlist-page'>
      <button onClick={() => dispatch(clearWishlist())}>Clear Wishlist</button>
      {console.log(wishlist)}
      {wishlist
        .map(item => (
          <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  wishlist: selectWishlistItems,
});

export default connect(
  mapStateToProps,
  null
)(WishlistPage);



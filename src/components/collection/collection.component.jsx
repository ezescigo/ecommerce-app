import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/collections/collections.selectors';
import { selectWishlistItems } from '../../redux/wishlist/wishlist.selectors';
import { withRouter } from 'react-router-dom';

import "react-toastify/dist/ReactToastify.css";

import CollectionItem from '../collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection, wishlist }) => {
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <div className='items'>
        {items.map(item => {
          return wishlist.find(wishlistItem => wishlistItem.id === item.id)
          ? <CollectionItem key={item.id} item={item} fav />
          : <CollectionItem key={item.id} item={item} />        
          }
        )}
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  wishlist: selectWishlistItems(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));


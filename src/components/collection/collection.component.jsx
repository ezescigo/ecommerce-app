import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/collections/collections.selectors';
import { selectWishlistItems } from '../../redux/wishlist/wishlist.selectors';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection, wishlist }) => {
  const { title, items } = collection;
  console.log(wishlist);

  return (
    <div className='collection-page'>
      <h2 className='title'>{ title }</h2>
      <div className='items'>
        {items.map(item => {
          return wishlist.find(wishlistItem => wishlistItem.id === item.id)
          ? <CollectionItem key={item.id} item={item} fav={true} />
          : <CollectionItem key={item.id} item={item} fav={false} />        
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


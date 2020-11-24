import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectWishlistItemsForPreview } from '../../redux/wishlist/wishlist.selectors';
import { selectCollectionsForPreview } from '../../redux/collections/collections.selectors';


import CollectionItem from '../../components/collection-item/collection-item.component';
import collectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';

const WishlistPage = ({ wishlist, collections }) => {

  return (
    <div className='wishlist-page'>
      {console.log(wishlist, collections)}
      {wishlist
        .map(item => (
          <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  wishlist: selectWishlistItemsForPreview,
  collections: selectCollectionsForPreview
});

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(WishlistPage);


// const mapDispatchToProps = dispatch => ({
//   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
// });

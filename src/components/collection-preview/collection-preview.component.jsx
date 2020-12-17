import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionItem from '../collection-item/collection-item.component.jsx';
import { selectWishlistItems } from '../../redux/wishlist/wishlist.selectors';

import { Slider } from '@lifarl/react-scroll-snap-slider';

import './collection-preview.styles.scss';

const slidesPerPageSettings = {
  mobileSmall: 1.5,
  mobileBig: 2.5,
  tablet: 4,
  desktop: 4,
}

const CollectionPreview = ({ title, items, wishlist }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      <Slider
      slidesPerPageSettings={slidesPerPageSettings}>
        {items
          .map(item => {
            return wishlist.find(wishlistItem => wishlistItem.id === item.id)
            ? <CollectionItem key={item.id} item={item} fav />
            : <CollectionItem key={item.id} item={item} />
            }
          )
        }
      </Slider>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  wishlist: selectWishlistItems
})

export default connect(mapStateToProps)(CollectionPreview);
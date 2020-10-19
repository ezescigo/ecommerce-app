import React from 'react';

import CollectionItem from '../collection-item/collection-item.component.jsx';

import { Slider } from '@lifarl/react-scroll-snap-slider';

import './collection-preview.styles.scss';

const slidesPerPageSettings = {
  mobileSmall: 1.5,
  mobileBig: 2.5,
  tablet: 4,
  desktop: 4,
}

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      <Slider
      slidesPerPageSettings={slidesPerPageSettings}>
        {items
          .map(item => (
            <CollectionItem key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  </div>
);

export default CollectionPreview;

// .filter((item, index) => index < 4)
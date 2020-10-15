import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsItems } from '../../redux/collections/collections.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
  {
    collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
    ))
  }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsItems
})

export default connect(mapStateToProps)(CollectionsOverview);
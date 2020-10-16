import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../components/collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Switch>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </Switch>
  </div>
);

export default ShopPage;

// <Route path='/shop/hats' component={CollectionItem} />
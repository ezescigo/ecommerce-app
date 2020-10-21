import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/collections/collections.actions';

import CollectionPageContainer from '../../components/collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

const ShopPage = ({ match, fetchCollectionsStartAsync }) => {
 
  useEffect(() => {
    fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync]);

  return (
    <div className='shop-page'>
      <Switch>
        <Route 
          exact path={`${match.path}`} 
          component={CollectionsOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer}
        />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
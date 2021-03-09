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
          render={(props) => (
            <CollectionPageContainer {...props} />
          )}
        />
        <Route 
          path={`${match.path}/:sectionName`} 
          render={(props) => (
            <CollectionPageContainer {...props} />
          )}
        />
        <Route 
          path={`${match.path}/:sectionName/:categoryName`} 
          render={(props) => (
            <CollectionPageContainer {...props} />
          )}
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


{/* <Route 
path={`${match.path}/:sectionId/:categoryId`} 
render={(props) => (
  <CollectionPageContainer {...props} />
)}
/> */}
import React, { useEffect } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollection, selectIsCollectionsLoaded } from '../../redux/collections/collections.selectors';
import { fetchCollectionsStartAsync } from '../../redux/collections/collections.actions';

import CollectionPageContainer from '../../components/collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

const ShopPage = ({ match }) => {
  console.log('rendering shoppage');
  const dispatch = useDispatch();

  // const {
  //   categories,
  //   error: errorCategories,
  //   loading: loadingCategories,
  // } = categoryList;

  // const {
  //   category,
  //   subcategory,
  //   // order = 'newest',
  //   // min = 0,
  //   // max = 1000000,
  //   // rating = 0,
  // } = useParams();

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync({ category: '' }));
  }, []);

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
          exact path={`${match.path}/:category`} 
          render={(props) => (
            <CollectionPageContainer {...props} />
          )}
        />
        <Route 
          path={`${match.path}/:category/:subcategory`} 
          render={(props) => (
            <CollectionPageContainer {...props} />
          )}
        />
      </Switch>
    </div>
  );
};

export default connect(
  null,
  null
)(ShopPage);


{/* <Route 
path={`${match.path}/:sectionId/:categoryId`} 
render={(props) => (
  <CollectionPageContainer {...props} />
)}
/> */}
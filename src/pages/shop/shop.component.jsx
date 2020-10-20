import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/collections/collections.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../components/collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false});
    });
  };

  render () {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Switch>
          <Route 
            exact path={`${match.path}`} 
            render={(props) => (
              <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
              )} 
          />
          <Route 
            path={`${match.path}/:collectionId`} 
            render={(props) => (<CollectionPageWithSpinner isLoading={loading} {...props} />
              )} 
          />
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);

// <Route path='/shop/hats' component={CollectionItem} />
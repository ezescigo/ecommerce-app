import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsDirectoryFetching } from '../../redux/directory/directory.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import Directory from './directory.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsDirectoryFetching
});

const DirectoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Directory);

// same as: const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

export default DirectoryContainer;
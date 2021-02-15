import React from 'react';
import { connect } from 'react-redux';

import { undo } from '../../redux/wishlist/wishlist.actions';

const Undo = ({ isFav, item, undoAction, closeToast, onUndo }) => {
  const handleClick = () => {
    onUndo();
    undoAction(item);
    closeToast();
  };

  return (
    <div>
      {(isFav)
      ? <h3>Item was removed from your Wishlist.</h3>
      : <h3>Item was added to your Wishlist.</h3>}
      <button onClick={ handleClick }>
        UNDO.
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  undoAction: item => dispatch(undo(item)),
});

export default connect(null, mapDispatchToProps)(Undo);
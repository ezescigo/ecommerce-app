import React from 'react';
import { connect } from 'react-redux';

import { undo } from '../../redux/wishlist/wishlist.actions';

const Undo = ({ item, message, undoAction, closeToast, onUndo }) => {
  const handleClick = () => {
    onUndo();
    undoAction(item);
    closeToast();
  };

  return (
    <div>
      <h3>{message}</h3>
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
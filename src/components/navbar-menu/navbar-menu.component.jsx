import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/collections/collections.selectors';

import { NavbarContainer, NavbarItem } from './navbar-menu.styles';

const NavbarMenu = ({ collections }) => {
  return (
    <NavbarContainer>
      { collections.map(collection => 
        <NavbarItem>{collection.title}</NavbarItem>
      )}
    </NavbarContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps, null)(NavbarMenu);
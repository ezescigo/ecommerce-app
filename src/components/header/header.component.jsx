import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import HeaderDesktop from '../header-desktop/header-desktop.component';
import HeaderMobile from '../header-mobile/header-mobile.component';
import { useMediaQuery } from 'react-responsive';

const Header = ( { currentUser, hidden, dispatch } ) => {
  // const {isXs, isSm, isMd, isLg, active} = useBreakpoints();
  const isXsDevice = useMediaQuery({
    query: '(max-width: 404px)'
  });
  
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
  });
  
  return (
    <nav>
     <HeaderMobile isXsDevice={isXsDevice} isMobile={isMobile} />
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
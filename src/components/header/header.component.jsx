import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import HeaderContainer from './header.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import HeaderDesktop from '../header-desktop/header-desktop.component';
import HeaderMobile from '../header-mobile/header-mobile.component';
import useBreakpoints from '../../hooks';
import { useMediaQuery } from 'react-responsive';

const Header = ( { currentUser, hidden, dispatch } ) => {
  const [isMob, setIsMob] = useState();
  // const {isXs, isSm, isMd, isLg, active} = useBreakpoints();
  
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  
  // console.log(isXs, isSm, isMd, isLg, active);
  return (
    <nav>
    {isDesktopOrLaptop ? <HeaderDesktop /> : <HeaderMobile />}
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
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

const Header = ( { currentUser, hidden, dispatch } ) => {
  const [state, setState] = useState({
    mobileView: (window.innerWidth < 480)
  });
  const { mobileView } = state;

  useEffect(() => {
    // Function that sets mobileView state to true or false depending on innerWidth.
    const setResponsiveness = () => {
      return window.innerWidth < 480
       ? setState((prevState) => ({ ...prevState, mobileView: true}))
       : setState((prevState) => ({ ...prevState, mobileView: false}));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    <div>
    { mobileView ? <HeaderMobile /> : (<HeaderDesktop />) }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
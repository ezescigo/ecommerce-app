import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCollectionsForPreview } from '../../redux/collections/collections.selectors';
import { selectIsCollectionFetching } from '../../redux/collections/collections.selectors';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HeaderContainer, SlideNavBar, OptionLink, NavTrigger, NavIcon } from './header-mobile.styles.jsx';
import { LogoContainer } from '../header/header.styles';

import NavItem from '../nav-item/nav-item.component';
import SlideMenu from '../slide-menu/slide-menu.component';
import { CSSTransition } from 'react-transition-group';

const HeaderMobile = ({ hidden, currentUser, collections, isLoading }) => {
  const [state, setState] = useState({
    drawerOpen: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return(
    <HeaderContainer>
      <NavTrigger onClick={toggleDrawer('drawerOpen', !state.drawerOpen)}>
        <NavIcon open={state.drawerOpen} />
      </NavTrigger>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <OptionLink to='/shop'>
              Shop
      </OptionLink>
      <OptionLink to='/wishlist'>
          Wishlist
      </OptionLink>
      { currentUser ? 
        (<OptionLink as='div' onClick={() => auth.signOut()}>
            Sign Out
        </OptionLink>
        ) : (
        <OptionLink to='/signin'>
            Sign In
        </OptionLink>
        )}

        <SlideNavBar open={state.drawerOpen} onClose={toggleDrawer('drawerOpen', false)}>    
          {isLoading
            ? 'Loading...'
            : <SlideMenu />
          }
        </SlideNavBar>
        <CartIcon />
        { hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  collections: selectCollectionsForPreview,
  isLoading: selectIsCollectionFetching
});

export default connect(mapStateToProps)(HeaderMobile);

// QUITAR HIDDEN y TOGGLE POR REDUX DEL CART-ICON
// VER COMO PONER 2 DRAWERS DISTINTOS

// onClick={toggleDrawer('drawerOpen', false)}
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCollectionsForPreview } from '../../redux/collections/collections.selectors';
import { selectIsCollectionFetching } from '../../redux/collections/collections.selectors';

import { auth } from '../../firebase/firebase.utils';
import { useOnClickOutside } from '../../hooks';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HeaderContainer, SlideNavBar, OptionsContainer, OptionLink, NavButton, NavIcon, NavContainer } from './header-mobile.styles.jsx';
import { LogoContainer } from '../header/header.styles';

import { BsPerson, BsHeart } from 'react-icons/bs';
import { BiCart } from 'react-icons/bi';

import SlideMenu from '../slide-menu/slide-menu.component';

const HeaderMobile = ({ hidden, currentUser, collections, isLoading }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => toggleDrawer(false));

  const getUserFirstName = () => {
    const userFirstName = currentUser.displayName.replace(/ .*/,'');
    return userFirstName;
  }
  

  const toggleDrawer = (toggle) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    event.stopPropagation();
    setDrawerOpen(toggle);
  };

  return(
    <HeaderContainer>
      <NavContainer>
        <NavButton onClick={toggleDrawer(!drawerOpen)}>
          <NavIcon open={drawerOpen} />
        </NavButton>
      </NavContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
            
        </OptionLink>
        <OptionLink to='/wishlist'>
            <BsHeart />
        </OptionLink>
        { currentUser ? 
          (
            <OptionLink as='div' onClick={() => auth.signOut()}>
            hola {getUserFirstName()}!
          </OptionLink>
          ) : (
          <OptionLink to='/signin'>
              Sign In
          </OptionLink>
          )}
        <OptionLink to='/checkout'>
          <CartIcon mobile={true} />
        </OptionLink>
      </OptionsContainer>
      <SlideNavBar open={drawerOpen}>    
        {isLoading
          ? 'Loading...'
          : <SlideMenu open={drawerOpen} />
        }
      </SlideNavBar>
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

// onClick={toggleDrawer('drawerOpen', false)}
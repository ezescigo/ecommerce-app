import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

import { clearWishlist } from '../../redux/wishlist/wishlist.actions';

const Header = ( { currentUser, hidden, dispatch } ) => (
    <HeaderContainer>
      <button onClick={() => dispatch(clearWishlist())}>Clear Wishlist</button>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to='/shop'>
              SHOP
          </OptionLink>
          <OptionLink to='/wishlist'>
              WISHLIST
          </OptionLink>
          { currentUser ? 
            (<OptionLink as='div' onClick={() => auth.signOut()}>
                SIGN OUT
            </OptionLink>
            ) : (
            <OptionLink to='/signin'>
                SIGN IN
            </OptionLink>
            )}
          <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
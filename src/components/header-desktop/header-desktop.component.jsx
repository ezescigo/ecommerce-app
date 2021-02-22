import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HeaderContainer, OptionsContainer, OptionLink } from './header-desktop.styles.jsx';
import { LogoContainer } from '../header/header.styles';

const HeaderDesktop = ({ hidden, currentUser }) => {

  const getUserFirstName = () => {
    const userFirstName = currentUser.displayName.replace(/ .*/,'');
    return userFirstName;
  }

  // hola {getUserFirstName()}!

  return(
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
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
        <CartIcon />
      </OptionsContainer>
  { hidden ? null : <CartDropdown /> }
  </HeaderContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(HeaderDesktop);

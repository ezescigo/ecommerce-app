import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase.utils';

import useHeight from '../header/useHeight.tsx';
import { useSpring, animated as a, config } from 'react-spring';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HeaderContainer, OptionsContainer, OptionLink, NavTrigger, NavIcon } from './header-mobile.styles.jsx';
import { LogoContainer } from '../header/header.styles';

const HeaderMobile = ({ hidden, currentUser }) => {

  const [heightRef, height] = useHeight();
  const slideInStyles = useSpring({
    config: { ...config.stiff },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: hidden ? 0 : 1,
      height: hidden ? 0 : height
    }
  });

  const [state, setState] = useState({
    drawerOpen: false,
    right: false,
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

        <OptionsContainer open={state.drawerOpen} onClick={toggleDrawer('drawerOpen', false)} onClose={toggleDrawer('drawerOpen', false)}>
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
        </OptionsContainer>
        <CartIcon />
        <a.div style={{ ...slideInStyles, overflow: "hidden" }}>
          
          <div className='cart-dropdown' ref={heightRef}>
            <div className='cart-items'>
            asdasdasdsa
            </div>
          </div>
        </a.div>
    </HeaderContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(HeaderMobile);

// QUITAR HIDDEN y TOGGLE POR REDUX DEL CART-ICON
// VER COMO PONER 2 DRAWERS DISTINTOS
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCollectionsForPreview } from '../../redux/collections/collections.selectors';
import { selectIsCollectionFetching } from '../../redux/collections/collections.selectors';
import { selectWishlistItemsCount } from '../../redux/wishlist/wishlist.selectors';

import { auth } from '../../firebase/firebase.utils';
import { useOnClickOutside } from '../../hooks';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HeaderContainer, SlideNavBar, OptionsContainer, OptionLink, NavButton, NavIcon, NavContainer } from './header-mobile.styles.jsx';
import { LogoContainer } from '../header/header.styles';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoPerson, IoPersonOutline } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { BiCart } from 'react-icons/bi';

import SlideMenu from '../slide-menu/slide-menu.component';

const HeaderMobile = ({ hidden, currentUser, collections, isLoading, isXsDevice, wishlistItemCount }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => toggleDrawer(false));


  

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
          { wishlistItemCount > 0
            ? (<div>
                <AiFillHeart size={30} className='navbar-icon' />
                <span className='item-count'>{wishlistItemCount}</span>
              </div>)
            : <AiOutlineHeart size={30} className='navbar-icon' />
          }
            
        </OptionLink>
        { currentUser ? 
          (
            <OptionLink as='div' onClick={() => auth.signOut()}>
              <IoPerson size={30} className='navbar-icon' />
            </OptionLink>
          ) : (
            <OptionLink to='/signin'>
              <IoPersonOutline size={30} className='navbar-icon' />
            </OptionLink>
          )}
        <OptionLink to='/checkout'>
          <CartIcon mobile={true} isXsDevice={isXsDevice} />
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
  isLoading: selectIsCollectionFetching,
  wishlistItemCount: selectWishlistItemsCount
});

export default connect(mapStateToProps)(HeaderMobile);

// onClick={toggleDrawer('drawerOpen', false)}
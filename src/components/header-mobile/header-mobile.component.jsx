import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCollectionsForPreview } from '../../redux/collections/collections.selectors';
import { selectIsCollectionFetching } from '../../redux/collections/collections.selectors';
import { selectWishlistItemsCount } from '../../redux/wishlist/wishlist.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { auth } from '../../firebase/firebase.utils';
import { useOnClickOutside } from '../../hooks';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import HeaderSideBar from '../header-sidebar/header-sidebar.component';
import { HeaderContainer, OptionsContainer, OptionLink } from './header-mobile.styles.jsx';
import { LogoContainer, LogoText } from '../header/header.styles';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoPerson, IoPersonOutline } from 'react-icons/io5';



const HeaderMobile = ({ hidden, isXsDevice, isMobile, currentUser, collections, isLoading,  wishlistItemCount, toggleCartHidden, location }) => {

  const getUserFirstName = () => {
    const userFirstName = currentUser.displayName.replace(/ .*/,'');
    return userFirstName;
  }

  return(
    <HeaderContainer>
      <HeaderSideBar isLoading={isLoading} />
      <LogoContainer to='/' isXsDevice={isXsDevice}>
        <LogoText>ZURÜCK</LogoText>
      </LogoContainer>
      <OptionsContainer>
        
        { currentUser ? 
          (
            <OptionLink as='div' onClick={() => auth.signOut()}>
              { !isMobile
              ? <span className='sign-salute'>Welcome, {currentUser.displayName}!</span>
              : null
              }
              <IoPerson size={30} className='navbar-icon' />
            </OptionLink>
          ) : (
            <OptionLink to='/signin'>
              <IoPersonOutline size={30} className='navbar-icon' />
            </OptionLink>
          )}
        <OptionLink to='/wishlist'>
          { wishlistItemCount > 0
            ? (<div>
                <AiFillHeart size={30} className='navbar-icon' />
                <span className='item-count'>{wishlistItemCount}</span>
              </div>)
            : <AiOutlineHeart size={30} className='navbar-icon' />
          }
            
        </OptionLink>
        <OptionLink to={`${isMobile ? "/checkout" : location.pathname }`}>
          <CartIcon mobile={isMobile} isXsDevice={isXsDevice} onClick={() => toggleCartHidden()} />
        </OptionLink>
      </OptionsContainer>
      {hidden
      ? null
      : <CartDropdown />}
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

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderMobile));
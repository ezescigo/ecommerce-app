import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectIsCollectionFetching, selectCollectionsForPreview } from '../../redux/collections/collections.selectors';
import { selectWishlistItemsCount } from '../../redux/wishlist/wishlist.selectors';
import { auth } from '../../firebase/firebase.utils';

import { usePrevious } from '../../hooks';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { HeaderContainer, OptionsContainer, OptionsContainerTop, OptionsPanel, OptionLink, LogoContainer, LogoText, NavbarMenuContainer, NavbarMenuItem, NavbarContainer, NavbarItem } from './header-desktop.styles.jsx';
import {useSpring, useTransition, animated, config} from 'react-spring';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoPerson, IoPersonOutline } from 'react-icons/io5';

const HeaderDesktop = ({  isXsDevice, isMobile, hidden, isLoading, collections, currentUser, history, location, toggleCartHidden, wishlistItemCount }) => {

  const [isActive, setIsActive] = useState('');
  const prevActive = usePrevious(isActive);
  const [subMenuHidden, setHideSubMenu] = useState(true);

  const slide = useTransition(!hidden, null, {
    from: { opacity: 0, transform: "translateY(0px)", transform: "scale(0)" },
    enter: { opacity: 1, transform: "translateY(0px)", transform: "scale(1)" },
    leave: { opacity: 0, transform: "translateY(-100px)" },
    });

  const fadeStyles = useSpring({
    config: { ...config.stiff },
    from: { zIndex: -50, opacity: 0, transform: "translateY(-100px)" },
    to: {
      opacity: !hidden ? 1 : 0,
      transform: hidden ? "translateY(-100px)" : "translateY(0px)",
      zIndex: hidden ? -50 : 30,
    }
  });

  const slideEffect = useTransition(!subMenuHidden, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    });

  const fadeStylesMenu = useSpring({
    config: { ...config.gentle },
    from: { opacity: 0 },
    to: {
      opacity: !subMenuHidden ? 1 : 0,
    }
  });

  useEffect(() => {
    isActive === ''
    ? setHideSubMenu(true)
    : setHideSubMenu(false)
  }, [isActive]);

  return(
    <HeaderContainer styled={location.pathname === '/' ? false : true}>
      <OptionsContainerTop>
      <OptionsPanel />
        <LogoContainer to='/' isXsDevice={isXsDevice}>
          <LogoText>ZURÜCK</LogoText>
        </LogoContainer>
        <OptionsPanel>
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
                </div>)
              : <AiOutlineHeart size={30} className='navbar-icon' />
            }
              
          </OptionLink>
          
          <OptionLink to={`${isMobile ? "/checkout" : location.pathname }`}>
            <CartIcon mobile={isMobile} isXsDevice={isXsDevice} onClick={() => toggleCartHidden()} />
          </OptionLink>
        </OptionsPanel>
      </OptionsContainerTop>
      {slide.map(
        ({ item, props, key }) =>
        item && (
          <animated.div style={fadeStyles}>
            <CartDropdown hidden={hidden} />
          </animated.div>)
      )}
      <OptionsContainer onMouseEnter={() => setIsActive(isActive || prevActive)} onMouseLeave={() => setIsActive('')}>
        <NavbarContainer>
          { collections.map(collection =>
            <NavbarItem onMouseEnter={() => {setIsActive(collection.id)}} onMouseLeave={() => setIsActive('')} onClick={() => history.push(`/shop/${collection.routeName}`)}>{collection.title}</NavbarItem>
          )}
        </NavbarContainer>
      </OptionsContainer>
      <animated.div style={fadeStylesMenu}>
        <OptionsContainer onMouseEnter={() => setIsActive(isActive || prevActive)} onMouseLeave={() => setIsActive('')}>
        {collections.map(collection => 
          collection.id === isActive
          ? collection.items.map(item => 
            <NavbarMenuItem  key={item.id} type='item'>
              { item.name }
            </NavbarMenuItem>)
          : null)}
        </OptionsContainer>
      </animated.div>
    </HeaderContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  isLoading: selectIsCollectionFetching,
  collections: selectCollectionsForPreview,
  wishlistItemCount: selectWishlistItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderDesktop));

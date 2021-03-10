import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, useRouteMatch } from 'react-router-dom';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCategoriesList } from '../../redux/categories/categories.selectors';
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

const HeaderDesktop = ({  isXsDevice, isMobile, hidden, isLoading, currentUser, history, location, toggleCartHidden, wishlistItemCount }) => {

  const sections = [
      {
        title: "Wines",
        imageUrl: "https://drive.google.com/uc?export=view&id=1lkYxMITYjMAOOlw9iBL1M9h7J7zT9i6S",
        id: 1,
        linkUrl: "shop/wines",
        categories: [
          {
            title: "Red",
            id: 11,
            linkUrl: "shop/wines/red-wines"
          },
          {
            title: "White",
            id: 12,
            linkUrl: "shop/wines/white-wines"
          },
          {
            title: "Sparkling",
            id: 13,
            linkUrl: "shop/wines/sparkling-wines"
          }
        ],
      },
      {
        title: "Spirits",
        imageUrl: "https://drive.google.com/uc?export=view&id=1lkYxMITYjMAOOlw9iBL1M9h7J7zT9i6S",
        id: 2,
        linkUrl: "shop/spirits",
        categories: [
          {
            title: "Whisky",
            id: 21,
            linkUrl: "shop/spirits/whisky"
          },
          {
            title: "Aperitives",
            id: 22,
            linkUrl: "shop/spirits/aperitives"
          },
          {
            title: "Spirits",
            id: 23,
            linkUrl: "shop/spirits/spirits"
          }
        ],
      },
      {
        title: "beers",
        imageUrl: "https://drive.google.com/uc?export=view&id=1lkYxMITYjMAOOlw9iBL1M9h7J7zT9i6S",
        id: 3,
        linkUrl: "shop/beers",
        categories: [
          { title: "beers", id: 31, linkUrl: "shop/beers/beers" },
          { title: "accesories", id: 32, linkUrl: "shop/beers/accesories"}
        ]
      },
      {
        title: "gourmet",
        imageUrl: "https://drive.google.com/uc?export=view&id=1lkYxMITYjMAOOlw9iBL1M9h7J7zT9i6S",
        id: 4,
        linkUrl: "shop/gourmet",
        categories: [
          { title: "Dressings", id: 41, linkUrl: "shop/gourmet/dressings" },
          { title: "Spreads", id: 42, linkUrl: "shop/gourmet/spreads" },
        ]
      } 
    ]


  const [isActive, setIsActive] = useState('');
  const prevActive = usePrevious(isActive);
  const [subMenuHidden, setHideSubMenu] = useState(true);

  const { url } = useRouteMatch();

  const slide = useTransition(!hidden, null, {
    from: { opacity: 0, transform: "translateY(0px)", transform: "scale(0)" },
    enter: { opacity: 1, transform: "translateY(0px)", transform: "scale(1)" },
    leave: { opacity: 0, transform: "translateY(-100px)" },
    });

  const fadeStylesDropdown = useSpring({
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
  }, [subMenuHidden]);

  const fadeStylesItem = useSpring({
    config: { ...config.gentle },
    from: { opacity: 0 },
    to: {
      opacity: isActive ? 1 : 0,
    }
  }, [isActive]);

  useEffect(() => {
    isActive === ''
    ? setHideSubMenu(true)
    : setHideSubMenu(false)


  }, [isActive]);

  return(
    <HeaderContainer 
      styled={location.pathname === '/' ? false : true}
      onMouseLeave={() => setIsActive('')}>
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
      <animated.div style={fadeStylesDropdown}>
        <CartDropdown hidden={hidden} />
      </animated.div>
      <OptionsContainer 
        onMouseEnter={() => setIsActive(isActive || prevActive)}
        onMouseLeave={() => setIsActive('')}
      >
        <NavbarContainer>
          { sections.map(section =>
            <NavbarItem 
              onMouseEnter={() => {setIsActive(section.title)}}
              onClick={() => history.push(`/${section.linkUrl}`)}
            >
              {section.title}
            </NavbarItem>
          )}
        </NavbarContainer>
      </OptionsContainer>
      <animated.div style={fadeStylesMenu}>
        <OptionsContainer 
          onMouseEnter={() => setIsActive(isActive || prevActive)}
        >
          {sections.map(section => 
            section.title === isActive &&
              section.categories.map(category => 
                <animated.div style={fadeStylesItem}>
                  <NavbarMenuItem
                  key={category.id}
                  type='item'
                  onClick={() => history.push(`/${category.linkUrl}`)}>
                    { category.title }
                  </NavbarMenuItem>
                </animated.div>)
            )
          }
        </OptionsContainer>
      </animated.div>
    </HeaderContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  isLoading: selectIsCollectionFetching,
  categories: selectCategoriesList,
  // sections: selectDirectorySections,
  wishlistItemCount: selectWishlistItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderDesktop));

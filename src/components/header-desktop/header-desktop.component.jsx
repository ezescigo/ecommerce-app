import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, useRouteMatch } from 'react-router-dom';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCategoriesList } from '../../redux/categories/categories.selectors';
import { selectIsCollectionFetching } from '../../redux/collections/collections.selectors';
import { selectWishlistItemsCount } from '../../redux/wishlist/wishlist.selectors';
import { auth } from '../../firebase/firebase.utils';

import useMeasure from 'react-use-measure';
import { usePrevious } from '../../hooks';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import SideSearchBox from '../slide-searchbox/slide-searchbox.component';
import { HeaderContainer, OptionsContainer, OptionsContainerTop, OptionsPanel, OptionLink, LogoContainer, LogoText, NavbarMenuContainer, NavbarMenuItem, NavbarContainer, NavbarItem } from './header-desktop.styles.jsx';
import { useSpring, useTransition, animated, config } from 'react-spring';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoPerson, IoPersonOutline } from 'react-icons/io5';


const HeaderDesktop = ({  isxsdevice, isMobile, hidden, isLoading, categories, currentUser, history, location, toggleCartHidden, wishlistItemCount }) => {

  const [isActive, setIsActive] = useState('');
  const prevActive = usePrevious(isActive);
  const [subMenuHidden, setHideSubMenu] = useState(true);
  const [ref, bounds] = useMeasure();

  const { url } = useRouteMatch();

  const slide = useTransition(!hidden, null, {
    from: { opacity: 0, transform: "translateY(0px)", transform: "scale(0)" },
    enter: { opacity: 1, transform: "translateY(0px)", transform: "scale(1)" },
    leave: { opacity: 0, transform: "translateY(-100px)" },
    });

  const fadeStylesDropdown = useSpring({
    config: { ...config.stiff },
    // reset: true,
    // reverse: true,
    from: { display: 'none', zIndex: -50, opacity: 0, transform: "translateY(-100px)" },
    to: {
      display: hidden ? 'none' : 'flex',
      opacity: !hidden ? 1 : 0,
      transform: hidden ? "translateY(-100px)" : "translateY(-50px)",
      zIndex: hidden ? -50 : 30,
    }
  });

  const transitionsDropdown = useTransition(!hidden, null, {
    from: { transform: "translateY(-100px)", opacity: 0 },
    enter: { transform: "translateY(-30px)", opacity: 1, zIndex: 30, },
    leave: { transform: "translateY(-100px)", opacity: 0 }
  })

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
        <LogoContainer to='/'>
          <LogoText>ZURÜCK</LogoText>
        </LogoContainer>
        <SideSearchBox ref={ref} headerWidth={bounds.left} />
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
            <CartIcon mobile={isMobile} isxsdevice={isxsdevice} onClick={() => toggleCartHidden()} />
          </OptionLink>
        </OptionsPanel>
      </OptionsContainerTop>
      {transitionsDropdown.map(({ item, key, props }) =>
        item && <animated.div key={key} style={props}><CartDropdown hidden={hidden} /></animated.div>
      )}
      
      
      {/* <animated.div style={fadeStylesDropdown}>
        <CartDropdown hidden={hidden} />
      </animated.div> */}
      <OptionsContainer 
        onMouseEnter={() => setIsActive(isActive || prevActive)}
        onMouseLeave={() => setIsActive('')}
      >
        <NavbarContainer>
          { categories.map(category =>
            <NavbarItem 
              key={category._id}
              onMouseEnter={() => {setIsActive(category.name)}}
              onClick={() => history.push(`/shop/${category.slug}`)}
            >
              {category.name}
            </NavbarItem>
          )}
        </NavbarContainer>
      </OptionsContainer>
      <animated.div style={fadeStylesMenu}>
        <OptionsContainer 
          onMouseEnter={() => setIsActive(isActive || prevActive)}
        >
          {categories.map(category => 
            category.name === isActive &&
              category.children.map(subcategory => 
                <animated.div style={fadeStylesItem}>
                  <NavbarMenuItem
                  key={subcategory._id}
                  type='item'
                  onClick={() => history.push(`/shop/${category.slug}/${subcategory.slug}`)}>
                    { subcategory.name }
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
  wishlistItemCount: selectWishlistItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderDesktop));

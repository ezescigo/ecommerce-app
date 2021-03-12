import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import HeaderDesktop from '../header-desktop/header-desktop.component';
import HeaderMobile from '../header-mobile/header-mobile.component';
import { useMediaQuery } from 'react-responsive';

const Header = ( { currentUser, hidden, dispatch } ) => {
  // const {isXs, isSm, isMd, isLg, active} = useBreakpoints();

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
          title: "Whiskies",
          id: 21,
          linkUrl: "shop/spirits/whiskies"
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

  const isXs = useMediaQuery({
    query: '(max-width: 404px)'
  });
  
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
  });
  
  return (
    <nav>
      {isMobile
      ? <HeaderMobile sections={sections} isxsdevice={isXs} isMobile={true} />
      : <HeaderDesktop sections={sections} isxsdevice={false} isMobile={false} />
      }
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
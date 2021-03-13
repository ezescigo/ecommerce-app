import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {useSpring, useTransition, animated, config} from 'react-spring';

import { Cover, SlideNavBar, SearchBoxContainer, SearchBox } from './slide-searchbox.styles.jsx';
import { BiSearchAlt as SearchIcon } from 'react-icons/bi';

import { selectCategoriesList } from '../../redux/categories/categories.selectors';

const SlideSearchBox = ({ isLoading, headerWidth }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const asd = parseInt(headerWidth);
  console.log(asd);
  
  const toggleDrawer = (toggle) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    event.stopPropagation();
    setDrawerOpen(toggle);
  };

  const slide = useTransition(drawerOpen, null, {
    from: { opacity: 0  },
    enter: { opacity: 1  },
    leave: { opacity: 0 },
    });
  const fadeStyles = useSpring({
    config: { ...config.gentle },
    from: {opacity: 0, transform: "translateX(-200px)" },
    to: {
      display: drawerOpen ? 'inline' : 'none',
      opacity: drawerOpen ? 1 : 0,
      transform: !drawerOpen ? "translateX(100px)" : "translateX(0px)",
      zIndex: !drawerOpen ? 40 : 40
    }
  });

  const searchBoxAnimated = useSpring({
    config: { ...config.gentle },
    transform: !drawerOpen ? "translateX(0px)" : `translateX(${asd}px)`,
    zIndex: !drawerOpen ? 40 : 40,
  });

  return (
    <React.Fragment>
      <animated.div style={searchBoxAnimated}>
        <SearchBoxContainer onClick={toggleDrawer(!drawerOpen)}>
          <SearchIcon size={36} className='search-icon' />
          <SearchBox  />
        </SearchBoxContainer>
      </animated.div>
      <Cover active={drawerOpen} onClick={toggleDrawer(!drawerOpen)} />
      <animated.div style={fadeStyles}>
        <SlideNavBar open={drawerOpen}>    
          {isLoading
            ? 'Loading...'
            : <div>hola</div>
          }
        </SlideNavBar>
      </animated.div>
  </React.Fragment>
  )
};

const mapStateToProps = createStructuredSelector({
  sections: selectCategoriesList,
});

export default connect(mapStateToProps)(SlideSearchBox);


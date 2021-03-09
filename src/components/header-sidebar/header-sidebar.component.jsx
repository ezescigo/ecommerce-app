import React, { useState } from 'react';

import SlideMenu from '../slide-menu/slide-menu.component';
import { SlideNavBar, NavButton, NavIcon, NavContainer } from './header-sidebar.styles.jsx';
import {useSpring, useTransition, animated, config} from 'react-spring';


const HeaderSideBar = ({ isLoading, }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    from: { zIndex: -50, opacity: 0, transform: "translateX(-200px)" },
    to: {
      opacity: drawerOpen ? 1 : 0,
      transform: !drawerOpen ? "translateX(-200px)" : "translateX(-65px)",
      zIndex: !drawerOpen ? -50 : 30
    }
  });

  return (
    <React.Fragment>
      <NavContainer>
        <NavButton onClick={toggleDrawer(!drawerOpen)}>
          <NavIcon open={drawerOpen} />
        </NavButton>
      </NavContainer>

          <animated.div style={fadeStyles}>
            <SlideNavBar open={drawerOpen}>    
              {isLoading
                ? 'Loading...'
                : <SlideMenu open={drawerOpen} />
              }
            </SlideNavBar>
          </animated.div>
  </React.Fragment>
  )
};

export default HeaderSideBar;
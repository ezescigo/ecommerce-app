import React, { useState } from 'react';

import SlideMenu from '../slide-menu/slide-menu.component';
import { SlideNavBar, NavButton, NavIcon, NavContainer } from './header-sidebar.styles.jsx';


const HeaderSideBar = ({ isLoading, }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (toggle) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    event.stopPropagation();
    setDrawerOpen(toggle);
  };

  return (
    <React.Fragment>
      <NavContainer>
        <NavButton onClick={toggleDrawer(!drawerOpen)} to=''>
          <NavIcon open={drawerOpen} />
        </NavButton>
      </NavContainer>
      <SlideNavBar open={drawerOpen}>    
        {isLoading
          ? 'Loading...'
          : <SlideMenu open={drawerOpen} />
        }
      </SlideNavBar>
  </React.Fragment>
  )
};

export default HeaderSideBar;
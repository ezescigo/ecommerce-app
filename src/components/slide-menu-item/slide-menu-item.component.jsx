import React from 'react';

import './slide-menu-item.styles.scss';

const SlideMenuItem = ({ children, onClick }) => {
  return (
    <div className='slide-menu-item' onClick={onClick}>
      { children }
    </div>
  )
};

export default (SlideMenuItem);



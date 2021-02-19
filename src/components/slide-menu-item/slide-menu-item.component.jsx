import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import './slide-menu-item.styles.scss';

const SlideMenuItem = ({ children, onClick, type }) => {

  return (
    <div className={`slide-menu-item ${type}`} onClick={onClick}>
      { children }
      <div className={`slide-icon-container`}>
        <IoIosArrowForward className='arrow-icon' />
      </div>
    </div>
  )
};

export default (SlideMenuItem);



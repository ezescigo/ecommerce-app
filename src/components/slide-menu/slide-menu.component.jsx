import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/collections/collections.selectors';
import { CSSTransition } from 'react-transition-group';
import SlideMenuItem from '../slide-menu-item/slide-menu-item.component';

import { IoIosArrowBack } from 'react-icons/io';

import './slide-menu.styles.scss';

const SlideMenu = ({ collections }) => {
  const [activeMenu, setActiveMenu] = useState('main');

  const handleOnClick = (goToMenu) => {
    goToMenu && setActiveMenu(goToMenu)
  };

  return (
    <div className='slide-menu'>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={350}
        classNames="menu-primary"
        unmountOnExit>
        <div className='menu'>
        
          {collections.map(({id, title}) =>
            <SlideMenuItem key={id} onClick={() => handleOnClick(title)} type='category'>
              {title}
            </SlideMenuItem> 
          )}
        </div>
      </CSSTransition>

      { collections.map(({ id, title, items }) => (
        <CSSTransition
          key={id}
          in={activeMenu === `${title}`}
          timeout={350}
          classNames="menu-secondary"
          unmountOnExit>
          <div className='menu'>
            <div className='slide-menu-category'>
              <div className='slide-icon-container'>
                <IoIosArrowBack className='arrow-icon' onClick={() => handleOnClick('main')}/>
              </div>
              <SlideMenuItem type='category-title'>{title}</SlideMenuItem>
            </div>
            
            {items.map(item =>  
              <SlideMenuItem key={item.id} type='item'>
              { item.name }
              </SlideMenuItem>)}

          </div>
      </CSSTransition>
      ))}
      
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(SlideMenu);


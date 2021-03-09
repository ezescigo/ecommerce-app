import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { CSSTransition } from 'react-transition-group';
import SlideMenuItem from '../slide-menu-item/slide-menu-item.component';

import { IoIosArrowBack } from 'react-icons/io';

import './slide-menu.styles.scss';

const SlideMenu = ({ sections }) => {
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
        
          {sections.map(({id, title}) =>
            <SlideMenuItem key={id} onClick={() => handleOnClick(title)} type='category'>
              {title}
            </SlideMenuItem> 
          )}
        </div>
      </CSSTransition>

      { sections.map(({ id, title, categories }) => (
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
            
            {categories.map(category =>  
              <SlideMenuItem key={category.id} type='item'>
              { category.title }
              </SlideMenuItem>)}

          </div>
      </CSSTransition>
      ))}
      
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(SlideMenu);


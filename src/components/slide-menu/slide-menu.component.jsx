import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategoriesList } from '../../redux/categories/categories.selectors';
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
        
          {sections.map(({_id, name}) =>
            <SlideMenuItem key={_id} onClick={() => handleOnClick(name)} type='category'>
              {name}
            </SlideMenuItem> 
          )}
        </div>
      </CSSTransition>

      { sections.map(({ _id, name, children }) => (
        <CSSTransition
          key={_id}
          in={activeMenu === `${name}`}
          timeout={350}
          classNames="menu-secondary"
          unmountOnExit>
          <div className='menu'>
            <div className='slide-menu-category'>
              <div className='slide-icon-container'>
                <IoIosArrowBack className='arrow-icon' onClick={() => handleOnClick('main')}/>
              </div>
              <SlideMenuItem type='category-title'>{name}</SlideMenuItem>
            </div>
            
            {children.map(subcategory =>  
              <SlideMenuItem key={subcategory._id} type='item'>
              { subcategory.name }
              </SlideMenuItem>)}

          </div>
      </CSSTransition>
      ))}
      
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectCategoriesList,
});

export default connect(mapStateToProps)(SlideMenu);


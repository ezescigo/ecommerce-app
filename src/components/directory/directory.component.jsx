import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import EmblaCarousel from "../slider-carousel/slider-carousel.component";

import { DirectoryContainer, ShopNowButton } from './directory.styles';

import { selectDirectorySection } from '../../redux/directory/directory.selectors';

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      <ShopNowButton to='/shop'>SHOP NOW</ShopNowButton>
      <EmblaCarousel slides={slides}  sections={sections} />
    </DirectoryContainer>
)};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);

// <Carousel>
// {sections.map(({id, imageUrl, ...otherSectionProps}) => (
//     <div 
//     key={id} 
//     className='home-bg-item'
//     style={{backgroundImage: `url(${imageUrl})` }}
//     >hola </div>
//     ))}
// </Carousel>

// {sections.map(({id, imageUrl, ...otherSectionProps}) => (
//   <img key={id} src={imageUrl} />))}
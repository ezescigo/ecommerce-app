import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import EmblaCarousel from "../slider-carousel/slider-carousel.component";

import image1 from '../../assets/142906604_321371755923457_6738979074385647212_n.jpg';
import image2 from '../../assets/146905055_1321793268220625_666729704345394529_n.jpg';

import { DirectoryContainer, BackgroundImage } from './directory.styles';

import { selectDirectorySection } from '../../redux/directory/directory.selectors';

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      <EmblaCarousel slides={slides} />
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
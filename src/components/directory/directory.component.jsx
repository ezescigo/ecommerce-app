import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import EmblaCarousel from "../slider-carousel/slider-carousel.component";

import { DirectoryContainer, ShopNowButton } from './directory.styles';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      <EmblaCarousel slides={slides}  sections={sections} />
      <ShopNowButton to='/shop'>SHOP NOW</ShopNowButton>
    </DirectoryContainer>
)};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
import React, { useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import EmblaCarousel from "../slider-carousel/slider-carousel.component";

import { DirectoryContainer, ShopNowButton } from './directory.styles';
import { fetchCollectionsStartAsync } from '../../redux/collections/collections.actions';
import { selectCategoriesList } from '../../redux/categories/categories.selectors';

const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Directory = ({ sections }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCollectionsStartAsync({}));
  // }, []);

  return (
    <DirectoryContainer>
      <EmblaCarousel slides={slides}  sections={sections} />
      <ShopNowButton to='/shop'>SHOP NOW</ShopNowButton>
    </DirectoryContainer>
)};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesList
});

export default connect(mapStateToProps)(Directory);
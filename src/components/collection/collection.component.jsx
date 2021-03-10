import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { selectCategoriesList } from '../../redux/categories/categories.selectors';
import { selectCollection, selectIsCollectionFetching } from '../../redux/collections/collections.selectors';
import { selectWishlistItems } from '../../redux/wishlist/wishlist.selectors';
import { fetchCollectionsStartAsync } from '../../redux/collections/collections.actions';
import { withRouter, useParams } from 'react-router-dom';

import "react-toastify/dist/ReactToastify.css";

import CollectionItem from '../collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection, wishlist, match }) => {
  console.log('rendering collection');
  const dispatch = useDispatch();
  

  // const getFilterUrl = (filter) => {
  //   const filterCategory = filter.category || category;
  //   const filterSubcategory = filter.subcategory || subcategory;
  //   // const filterOrder = filter.order || order;

  //   // const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
  //   // const filterMax = filter.max || max;
  //   // const filterRating = filter.rating || rating;

  //   // return `/search/category/${filterCategory}/name/${filterName}/order/${filterOrder}/min/${filterMin}/max/${filterMax}/rating/${filterRating}`;
  //   return `/search/category/${filterCategory}/subcategory/${filterSubcategory}`;
  // };

  const {
    category,
    subcategory,
    // order = 'newest',
    // min = 0,
    // max = 1000000,
    // rating = 0,
  } = useParams();

  console.log(category);
  console.log(subcategory);

  useEffect(() => {
    if (category !== undefined) {
      dispatch(fetchCollectionsStartAsync({
        category: category
        // subcategory: subcategory !== 'all' ? subcategory : null,
        // order,
        // min,
        // max,
        // rating,
      }));
    }
  }, [category]);

  return (
    <div className='collection-page'>
      <div className='items'>
        hola
        {match.params.category ? match.params.category : null }
        {match.params.subcategory ? match.params.subcategory : null }
        {/* {collection[0].categories.map(category => category.items.map(item => {
          return wishlist.find(wishlistItem => wishlistItem.id === item.id)
          ? <CollectionItem key={item.id} item={item} fav />
          : <CollectionItem key={item.id} item={item} />        
          }
        ))} */}
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => 
({
  collection: selectIsCollectionFetching(state),
  // collection: selectCollection(
  //   ownProps.match.params.category)(state),
  wishlist: selectWishlistItems(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));


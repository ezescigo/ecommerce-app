import { createSelector } from 'reselect';

const selectShop = state => state.collections;

export const selectCollections = createSelector(
  [selectShop],
  collections => collections.collections
);

// Selector to transform from obj to array so .map keeps working on our components
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => (collections ? collections.filter(collection => collection.routeName === collectionUrlParam ) : null)
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  collections => collections.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectCollections],
  collections => !!collections
); 
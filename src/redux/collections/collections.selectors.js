import { createSelector } from 'reselect';

const selectCollections = state => state.collections;

export const selectCollectionsItems = createSelector(
  [selectCollections],
  collections => collections.shopItems
);

// Selector to transform from obj to array so .map keeps working on our components
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections.shopItems).map(key => collections.shopItems[key])
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections.shopItems[collectionUrlParam]
);
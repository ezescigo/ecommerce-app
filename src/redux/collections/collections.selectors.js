import { createSelector } from 'reselect';

const selectCollections = state => state.collections;

export const selectCollectionsItems = createSelector(
  [selectCollections],
  collections => collections.shopItems
);
import CollectionsActionTypes from './collections.type';

export const updateCollections = (collectionsMap) => ({
  type: CollectionsActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
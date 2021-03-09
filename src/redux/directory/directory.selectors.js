import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);

export const selectIsDirectoryFetching = createSelector(
  [selectDirectory],
  directory => directory.isFetching
);
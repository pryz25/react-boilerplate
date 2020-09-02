import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFeature = state => state.feature || initialState;

const makeSelectString = () =>
  createSelector(
    selectFeature,
    featureState => featureState.username,
  );

export { selectFeature, makeSelectString };

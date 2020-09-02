import produce from 'immer';
import { NEW_STRING } from './constants';

export const initialState = {
  newString: '',
};

/* eslint-disable default-case, no-param-reassign */
const featureReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case NEW_STRING:
        draft.newString = action.newString;
        break;
    }
  });

export default featureReducer;

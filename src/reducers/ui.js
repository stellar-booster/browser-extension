import {Record} from 'immutable';
import {LOADING, ERROR} from '../constants/action-types';

const initialState = new Record({
  loading: false,
  error: null,
})();

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return state
        .set('loading', action.payload);
    case ERROR:
      return state
        .set('error', action.payload);
    default:
      return state;
  }
};

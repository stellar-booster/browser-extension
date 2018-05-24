import {Record} from 'immutable';
import {
  USER_LOGIN,
  USER_LOGOUT,
} from '../constants/action-types';

const initialState = new Record({
  account: '',
  loggedIn: false,
  secretKey: null,
})();

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return state
        .set('loggedIn', false)
        .set('secretKey', null)
        .set('account', '');

    case USER_LOGIN:
      return state
        .set('loggedIn', true)
        .set('secretKey', action.payload.secretKey || state.get('secretKey'))
        .set('account', action.payload.account);

    default:
      return state;
  }
};

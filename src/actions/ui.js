import {LOADING, ERROR} from '../constants/action-types';

export const loading = (payload) => ({
  type: LOADING,
  payload
});

export const error = (payload) => ({
  type: ERROR,
  payload
});

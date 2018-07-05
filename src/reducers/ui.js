import { Record } from 'immutable'
import { LOADING, ERROR, NOTIFY } from '../constants/action-types'

const initialState = new Record({
  loading: false,
  error: null,
  notify: null
})()

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return state
        .set('loading', action.payload)
    case ERROR:
      return state
        .set('error', action.payload)
    case NOTIFY:
      return state
        .set('notify', action.payload)
    default:
      return state
  }
}

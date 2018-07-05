import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import user from './user'
import ui from './ui'

export default combineReducers({
  user,
  ui,
  router
})

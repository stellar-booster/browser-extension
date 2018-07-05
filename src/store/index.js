import { compose, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

export default function (initialState = {}, history) {
  const middlewares = [
    thunk,
    routerMiddleware(history)
  ]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  // const isProduction = process.env.NODE_ENV === 'production';
  //
  // if(isProduction) {
  //   return createStore(
  //     reducers,
  //     initialState,
  //     compose(
  //       applyMiddleware(...middlewares),
  //     )
  //   );
  // }

  // middlewares.push(createLogger());

  return createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
      // DevTools.instrument()
    )
  )
}

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import {reducers, sagas} from './data'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

export { store }

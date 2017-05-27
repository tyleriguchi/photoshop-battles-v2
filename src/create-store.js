import { createStore } from 'redux'
import {reducers} from './data'

const store = createStore(reducers)

export { store }

import {createStore} from 'redux'
import cityRecuder from './reducers/cityReducer'

const store = createStore(cityReducer, applyMiddleware(thunk))


export default store

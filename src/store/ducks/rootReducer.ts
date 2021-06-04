import { combineReducers } from 'redux'
import reducerUsers from './users/reducer'
import reducerAssets from './assets/reducer'

const createRootReducer = () => combineReducers({
    reducerUsers,
    reducerAssets
})

export default createRootReducer
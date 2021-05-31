import { combineReducers } from 'redux'
import reducerUsers from './users/reducer'

const createRootReducer = () => combineReducers({
    reducerUsers
})

export default createRootReducer
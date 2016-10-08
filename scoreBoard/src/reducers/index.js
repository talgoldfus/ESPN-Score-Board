import { combineReducers } from 'redux'
import eventFilter from './eventFilterReducer'

const rootReducer = combineReducers({
events :eventFilter
})


export default rootReducer

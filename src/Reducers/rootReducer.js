import { combineReducers } from 'redux'
import charts from './ChartReducer'

// Using Combine Reducers to combine all reducers if any more are needed
export default combineReducers({
    charts,
});
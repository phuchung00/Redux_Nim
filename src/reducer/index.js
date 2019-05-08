import { combineReducers } from 'redux'
import counter from '../action/DescreaseReducer'
import {isChangeReducer} from '../action/ChangePlayer'
export default combineReducers({
  counter,
  isChangeReducer,
}) 
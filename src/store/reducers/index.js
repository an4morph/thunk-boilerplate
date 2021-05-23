import { combineReducers } from 'redux'
import auth from './auth'
import crud from './crud'

export default combineReducers({
  auth, crud,
})

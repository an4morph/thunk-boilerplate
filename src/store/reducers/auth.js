import {
  GET_ME_SUCCESS,
  GET_ME_LOADING,
  GET_ME_FAILED,

  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILED,

  SIGNUP_SUCCESS,
  SIGNUP_LOADING,
  SIGNUP_FAILED,
} from '../constants'
import stateCreator from '../../services/stateCreator'

const initialState = {
  me: null,
  getMe: stateCreator(),
  login: stateCreator(),
  signup: stateCreator(),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ME_SUCCESS:
      return {
        ...state,
        me: action.me,
        getMe: stateCreator('success'),
      }
    case GET_ME_LOADING:
      return {
        ...state,
        getMe: stateCreator('loading'),
      }
    case GET_ME_FAILED:
      return {
        ...state,
        getMe: stateCreator('failed', action.error),
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        me: action.me,
        login: stateCreator('success'),
      }
    case LOGIN_LOADING:
      return {
        ...state,
        login: stateCreator('loading'),
      }
    case LOGIN_FAILED:
      return {
        ...state,
        login: stateCreator('failed', action.error),
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        me: action.me,
        signup: stateCreator('success'),
      }
    case SIGNUP_LOADING:
      return {
        ...state,
        signup: stateCreator('loading'),
      }
    case SIGNUP_FAILED:
      return {
        ...state,
        signup: stateCreator('failed', action.error),
      }
    default: return state
  }
}

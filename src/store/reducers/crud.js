import {
  GET_CRUD_SUCCESS,
  GET_CRUD_LOADING,
  GET_CRUD_FAILED,
} from '../constants'
import stateCreator from '../../services/stateCreator'

const initialState = {
  data: [],
  getCrud: stateCreator(),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CRUD_SUCCESS:
      return {
        ...state,
        data: action.data,
        getCrud: stateCreator('success'),
      }
    case GET_CRUD_LOADING:
      return {
        ...state,
        getCrud: stateCreator('loading'),
      }
    case GET_CRUD_FAILED:
      return {
        ...state,
        getCrud: stateCreator('failed', action.error),
      }
    default: return state
  }
}

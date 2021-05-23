import {
  GET_CRUD_SUCCESS,
  GET_CRUD_LOADING,
  GET_CRUD_FAILED,
} from '../constants'
import { apiGet } from '../api'
import apiErrorHandler from '../../services/apiErrorHandler'

export const getCrudAction = () => (dispatch) => {
  dispatch({ type: GET_CRUD_LOADING })
  apiGet('/api/v1/crud')
    .then((res) => {
      dispatch({ type: GET_CRUD_SUCCESS, data: res.data })
    })
    .catch((err) => {
      dispatch({ type: GET_CRUD_FAILED, error: apiErrorHandler(err) })
    })
}

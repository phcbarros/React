import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_OAPI_URL = 'http://localhost:3003/oapi'

export const login = (values) => {
  return submit(values, `${BASE_OAPI_URL}/login`)
}

export const signup = (values) => {
  return submit(values, `${BASE_OAPI_URL}/signup`)
}

const submit = (values, url) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(url, values)
      dispatch(userFetched(res.data))
    } catch (err) {
      err.response.data.errors.forEach((error) => toastr.error('Erro', error))
    }
  }
}

export const TOKEN_VALIDATED = 'TOKEN_VALIDATED'
export const logout = () => {
  return {
    type: TOKEN_VALIDATED,
    payload: false,
  }
}

export const tokenValidated = (payload) => () => {
  return {
    type: TOKEN_VALIDATED,
    payload,
  }
}

export const validateToken = (token) => {
  return async (dispatch) => {
    try {
      if (token) {
        const res = await axios.post(`${BASE_OAPI_URL}/validateToken`, {
          token,
        })
        dispatch(tokenValidated(res.data.valid))
      } else {
        dispatch(logout())
      }
    } catch (err) {
      dispatch(logout())
    }
  }
}

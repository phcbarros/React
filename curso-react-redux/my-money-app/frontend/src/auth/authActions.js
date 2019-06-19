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
  return (dispatch) => {
    axios
      .post(url, values)
      .then((res) => {
        dispatch(userFetched(res.data))
      })
      .catch((err) => {
        err.response.data.errors.forEach((error) => toastr.error('Erro', error))
      })
  }
}

export const USER_FETCHED = 'USER_FETCHED'
const userFetched = (payload) => {
  return {
    type: USER_FETCHED,
    payload,
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
  return (dispatch) => {
    if (token) {
      axios
        .post(`${BASE_OAPI_URL}/validateToken`, {
          token,
        })
        .then((res) => {
          dispatch(tokenValidated(res.data.valid))
        })
        .catch((err) => dispatch(logout()))
    } else {
      dispatch(logout())
    }
  }
}

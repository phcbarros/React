const USER_KEY = '_mymoney_user'
const initialState = {
  user: JSON.parse(localStorage.getItem(USER_KEY)),
  validToken: false,
}

import { TOKEN_VALIDATED, USER_FETCHED } from '../authReducerActions'

export default (reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TOKEN_VALIDATED:
      if (payload) {
        return { ...state, validToken: true }
      } else {
        localStorage.removeItem(USER_KEY)
        return { ...state, user: null, validToken: false }
      }
    case USER_FETCHED:
      localStorage.setItem(USER_KEY, JSON.stringify(payload))
      return { ...state, user: payload, validToken: true }
    default:
      return state
  }
})

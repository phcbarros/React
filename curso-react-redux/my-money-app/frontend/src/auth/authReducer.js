const USER_KEY = '_mymoney_user'
const initialState = {
  user: { name: 'teste', email: 'teste.com' }, //JSON.parse(localStorage.getItem(USER_KEY)),
  validToken: false,
}

import { TOKEN_VALIDATED, USER_FETCHED } from './authActions'

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TOKEN_VALIDATED:
      if (payload) {
        return { ...state, validToken: true }
      } else {
        localStorage.removeItem(userKey)
        return { ...state, validToken: false, user: null }
      }
    case USER_FETCHED:
      localStorage.setItem(userKey, JSON.stringify(payload))
      return { ...state, user: payload, validToken: true }
    default:
      return state
  }
}

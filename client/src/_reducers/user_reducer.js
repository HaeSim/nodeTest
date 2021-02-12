import * as types from '../_actions/types'

const initialStates = {}

export default function (state = initialStates, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state, loginSuccess: action.payload }

    case types.REGISTER_USER:
      return { ...state, register: action.payload }

    case types.AUTH_USER:
      return { ...state, userData: action.payload }

    default:
      return state
  }
}

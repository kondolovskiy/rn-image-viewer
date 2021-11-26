import { combineReducers } from 'redux'
import { LOGIN_FETCHED, LOGOUT } from "../actions"
import { ILoginAction } from '../actions/types'

const defaultUserState = {
  isLoggedIn: false
}

const user = (state = defaultUserState, action: ILoginAction) => {
  switch(action.type) {
    case LOGIN_FETCHED:
      return {
        isLoggedIn: true,
        ...action.payload
      }

    case LOGOUT: 
      return defaultUserState

    default:
      return state
  }
}

export default combineReducers({
  user
})
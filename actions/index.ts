export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FETCHED = 'LOGIN_FETCHED'
export const LOGOUT = 'LOGOUT'

export const logIn = (code: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: {
    code, 
    password
  }
})


export const loginFetched = (response: any) => ({
  type: LOGIN_FETCHED,
  payload: response
})

export const logOut = () => ({
  type: LOGOUT
})
import { call, put, takeEvery } from 'redux-saga/effects'
import { LOGIN_REQUEST, loginFetched } from '../actions'
import { ILoginAction } from '../actions/types'
import { IResponse, logIn } from '../api/login'

function* loginUser(action: ILoginAction) {
  try {
    const user: IResponse = yield call(logIn, {...action.payload})
    yield put(loginFetched(user))
  } catch(e) {
    console.error(e)
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginUser)
}
import { put, call, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { getUsersSuccess, getUsersError, GET_USERS_START } from './actions';

function* getUsers() {
  const users: AxiosResponse = yield call(() =>
    axios.get('http://jsonplaceholder.typicode.com/users')
  );
  try {
    yield put(getUsersSuccess(users.data));
  } catch (e) {
    yield put(getUsersError(e));
  }
}

export function* getUsersSaga() {
  yield takeEvery(GET_USERS_START, getUsers);
}

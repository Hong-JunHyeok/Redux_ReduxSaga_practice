import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import users, { getUsersSaga } from './users';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
  users,
});

export default rootReducer;

export function* rootSaga() {
  yield all([counterSaga(), getUsersSaga()]);
}

//모든 store 대한 타입
export type RootReducerType = ReturnType<typeof rootReducer>;

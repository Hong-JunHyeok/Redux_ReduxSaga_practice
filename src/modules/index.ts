import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

export function* rootSaga() {
  yield all([counterSaga()]);
}

//모든 store 대한 타입
export type RootReducerType = ReturnType<typeof rootReducer>;

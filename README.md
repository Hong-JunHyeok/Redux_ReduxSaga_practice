# 리덕스 & 리덕스 사가

## 사용 라이브러리

- redux-devtools-extension : 크롬 확장도구를 사용하기 위한 라이브러리입니다.
- redux : 리덕스를 사용하기 위한 라이브러리입니다.
- react-redux : 리액트 환경에서 리덕스를 사용하기 위한 라이브러리입니다.
- redux-saga : 리덕스에서 비동기 처리를 하기위한 미들웨어를 지원하는 라이브러리입니다.
- axios : 서버 API와 연동하는 작업을 도와주는 라이브러리입니다.

## modules 파일구조

![image](https://user-images.githubusercontent.com/48292190/111722066-75f5f700-88a4-11eb-9206-6737388ec5fd.png)

# Counter Module 구조설명

counter에 types는 의미가 없다... 그냥 각자 파일에서 선언해주면 될 것 같다.

### actions.ts

```typescript
export const INCREASE = 'INCREASE' as const;
export const DECREASE = 'DECREASE' as const;
//실질적으로 증가/감소하는 액션타입

export const INCREASE_ASYNC = 'INCREASE_ASYNC' as const;
export const DECREASE_ASYNC = 'DECREASE_ASYNC' as const;
//리덕스 사가를 위한 액션타입. 딜레이를 주기 위한 역활

export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});
export const increaseAsync = () => ({
  type: INCREASE_ASYNC,
});
export const decreaseAsync = () => ({
  type: DECREASE_ASYNC,
});
//액션의 객체를 생성시켜주는 액션생성함수를 선언함.
```

### reducer.ts

```typescript
import { CounterActionType, CounterState } from './types';
import { INCREASE, DECREASE } from './actions';

const initialState = 0;
//초기 상태값을 선언함.

//리듀서에서는 state와 action두 개의 객체를 받는데,
//state에는 앞서 선언한 inititalState의 타입을 정의해주면 되고,

//action에는 actions.ts에서 선언한 액션생성 함수들의
//ex ) ReturnType<typeof 액션생성함수>
//의 모음을 모아놓은 변수를 타입으로 지정해주면 된다.
//자세한 내용은 코드 참조.

const counterReducer = (state: CounterState = initialState, action: CounterActionType) => {
  switch (action.type) {
    //각 액션타입에 따른 state를 변화시켜줌.
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
```

### sagas.ts(가장 중요한 파일)

```typescript
import { put, takeEvery, delay, takeLatest } from 'redux-saga/effects';
import { increase, decrease, INCREASE_ASYNC, DECREASE_ASYNC } from './actions';

//실질적으로 증가하는 함수
export function* increaseSaga() {
  yield put(increase());
}

//실질적으로 감소하는 함수
export function* decreaseSaga() {
  yield put(decrease());
}

//1초의 딜레이를 주고 증가하는 함수
export function* increaseAsyncSaga() {
  yield delay(1000);
  yield put(increase());
}

//1초의 딜레이를 주고 감소하는 함수
export function* decreaseAsyncSaga() {
  yield delay(1000);
  yield put(decrease());
}

//takeEvery와 takeLatest의 차이는
//takeEvery => 액션이 디스패치 될때마다 새로운 saga를 실행한다는 함수이고
//takeLatest => 마지막으로 디스패치의 응답만 가져올 수 있는 함수이다. (단 하나의 디스패치를 함.)
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseAsyncSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseAsyncSaga);
}
```

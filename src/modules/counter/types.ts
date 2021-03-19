import { increase, decrease, increaseAsync, decreaseAsync } from './actions';

export type CounterState = number;

//Counter Actions에 대한 타입
export type CounterActionType =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseAsync>
  | ReturnType<typeof decreaseAsync>;

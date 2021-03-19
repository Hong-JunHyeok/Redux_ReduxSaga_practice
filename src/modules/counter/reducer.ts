import { CounterActionType, CounterState } from './types';
import { INCREASE, DECREASE } from './actions';

const initialState = 0;

const counterReducer = (state: CounterState = initialState, action: CounterActionType) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;

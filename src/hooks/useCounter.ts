import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from 'modules';
import { useCallback } from 'react';
import { decreaseAsync, increaseAsync } from 'modules/counter';

const useCounter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootReducerType) => state.counter);

  const onIncrease = useCallback(() => {
    dispatch(increaseAsync());
  }, [dispatch]);
  const onDecrease = useCallback(() => {
    dispatch(decreaseAsync());
  }, [dispatch]);

  return { state, onIncrease, onDecrease };
};

export default useCounter;

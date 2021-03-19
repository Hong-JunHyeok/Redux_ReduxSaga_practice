export const INCREASE = 'INCREASE' as const;
export const DECREASE = 'DECREASE' as const;
export const INCREASE_ASYNC = 'INCREASE_ASYNC' as const;
export const DECREASE_ASYNC = 'DECREASE_ASYNC' as const;

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

import React from 'react';
import useCounter from 'hooks/useCounter';

const Counter = () => {
  const { state, onIncrease, onDecrease } = useCounter();
  return (
    <>
      <h1>{state}</h1>
      <button onClick={onIncrease}>up</button>
      <button onClick={onDecrease}>down</button>
    </>
  );
};

export default Counter;

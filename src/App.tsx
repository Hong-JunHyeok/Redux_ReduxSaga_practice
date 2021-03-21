import React from 'react';
import Counter from 'components/counter';
import User from 'components/users/User';

function App() {
  return (
    <>
      Hello Redux with Redux Saga
      <Counter />
      <hr />
      <User />
    </>
  );
}

export default App;

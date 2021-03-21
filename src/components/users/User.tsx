import useUsers from 'hooks/useUsers';
import React, { useEffect } from 'react';

const User = () => {
  const { state, handleGetUsersState } = useUsers();
  useEffect(() => {
    handleGetUsersState();
  }, [handleGetUsersState]);

  const { data, loading, error } = state;
  const userMap = data?.map((user) => <li key={user.id}>{user.name}</li>);

  return <>{loading ? <>Loading</> : error ? <>오류가 발생</> : userMap}</>;
};

export default User;

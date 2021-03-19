import useUsers from 'hooks/useUsers';
import React, { useEffect } from 'react';

const User = () => {
  const { state, handleGetUsersState } = useUsers();
  useEffect(() => {
    handleGetUsersState();
  }, []);
  const { data, loading, error } = state;
  const userMap = data?.map((user) => <li key={user.id}>{user.name}</li>);

  return <>{loading ? <>Loading</> : userMap}</>;
};

export default User;

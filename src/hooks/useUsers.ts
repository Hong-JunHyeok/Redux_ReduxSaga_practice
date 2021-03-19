import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from 'modules';
import { useCallback } from 'react';
import { getUsersStart, getUsersSuccess, getUsersError } from 'modules/users/actions';

const useUsers = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootReducerType) => state.users);
  console.log(state);

  const handleGetUsersState = useCallback(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  return { state, handleGetUsersState };
};

export default useUsers;

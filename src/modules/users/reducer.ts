import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GetUsersActionsType,
} from './actions';
import { UsersType } from './types';
import { AxiosError } from 'axios';

type State = {
  loading: boolean;
  data: UsersType[] | null;
  error: AxiosError | null;
};
const initialState: State = {
  loading: false,
  data: null,
  error: null,
};

function usersReducer(state: State = initialState, action: GetUsersActionsType) {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default usersReducer;

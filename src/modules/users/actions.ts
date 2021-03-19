import { AxiosError } from 'axios';
import { UsersType } from './types';

export const GET_USERS_START = 'GET_USERS_START' as const;
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS' as const;
export const GET_USERS_ERROR = 'GET_USERS_ERROR' as const;

export const getUsersStart = () => ({
  type: GET_USERS_START,
});
export const getUsersSuccess = (users: UsersType[]) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});
export const getUsersError = (error: AxiosError) => ({
  type: GET_USERS_ERROR,
  payload: error,
});

export type GetUsersActionsType =
  | ReturnType<typeof getUsersStart>
  | ReturnType<typeof getUsersSuccess>
  | ReturnType<typeof getUsersError>;

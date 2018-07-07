import { createAction } from 'redux-actions';

export const UPDATE_USER_PROFILE = 'PROFILE/UPDATE_USER_PROFILE';
export type UPDATE_USER_PROFILE = typeof UPDATE_USER_PROFILE;

export const CLEAR_USER_PROFILE = 'PROFILE/CLEAR_USER_PROFILE';
export type CLEAR_USER_PROFILE = typeof CLEAR_USER_PROFILE;

export const UPDATE_TOKEN = 'PROFILE/UPDATE_TOKEN';
export type UPDATE_TOKEN = typeof UPDATE_TOKEN;

export const LOGOUT = 'PROFILE/LOGOUT';
export type LOGOUT = typeof LOGOUT;

export const CHECK_FOR_LOG_IN = 'PROFILE/CHECK_FOR_LOG_IN';
export type CHECK_FOR_LOG_IN = typeof CHECK_FOR_LOG_IN;

export interface CheckForLogIn {
  type: CHECK_FOR_LOG_IN;
}

const checkForLogIn = createAction(CHECK_FOR_LOG_IN);

export interface UpdateUserProfile {
  type: UPDATE_USER_PROFILE;
  payload: {
    token: string;
    rememberMe?: boolean;
  };
}

export interface ClearUserProfile {
  type: CLEAR_USER_PROFILE;
}

export interface Logout {
  type: LOGOUT;
}

const updateUserProfile = createAction(
  UPDATE_USER_PROFILE,
  (token: string, rememberMe: boolean) => ({ token, rememberMe }),
);
const clearUserProfile = createAction(CLEAR_USER_PROFILE);
const logout = createAction(LOGOUT);

export { updateUserProfile, clearUserProfile, logout, checkForLogIn };

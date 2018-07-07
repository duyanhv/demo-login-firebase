import { handleActions } from 'redux-actions';
import { ProfileState } from '.';
import {
  UpdateUserProfile,
  ClearUserProfile,
  CLEAR_USER_PROFILE,
  UPDATE_USER_PROFILE,
  CheckForLogIn,
  CHECK_FOR_LOG_IN,
} from './action';
// import * as admin from 'firebase-admin';
import jwt_decode from 'jwt-decode';

export interface Token {
  uid: string;
  username: string;
  email: string;
  name: string;
  permissions: string[];
  language: string;
  exp?: number;
  iat?: number;
  user_id: string;
}

// const decodeToken = async (token: any) => {
//   try {
//     const response = await admin.auth().verifyIdToken(token);
//     // tslint:disable-next-line:no-console
//     console.log(response);
//     return response;
//   } catch (error) {
//     // tslint:disable-next-line:no-console
//     console.log(error);
//     return null;
//   }
// };

const defaultState: ProfileState = {
  id: '',
  isLoggedIn: false,
  rememberMe: false,
  token: '',
  username: '',
  email: '',
  fullName: '',
  permissions: [],
  language: '',
};

const checkForLogInReducer = (
  state: ProfileState,
  action: CheckForLogIn
) => {
  return {
    ...state,
  };
};

const updateUserProfileReducer = (
  state: ProfileState,
  action: UpdateUserProfile,
) => {
  const data: Token = jwt_decode(action.payload.token) as any;
  // tslint:disable-next-line:no-console
  console.log(data);
  return {
    ...state,
    id: data.uid ? data.uid : data.user_id,
    isLoggedIn: true,
    rememberMe: action.payload.rememberMe || false,
    token: action.payload.token,
    email: data.email,
    fullName: data.name,
    permissions: data.permissions,
    language: data.language ? data.language : 'en',
  };
};

const clearUserProfileReducer = (
  state: ProfileState,
  action: ClearUserProfile,
) => {
  return { ...defaultState };
};

const profileReducer = handleActions<ProfileState, any>(
  {
    [UPDATE_USER_PROFILE]: updateUserProfileReducer,
    [CLEAR_USER_PROFILE]: clearUserProfileReducer,
    [CHECK_FOR_LOG_IN]: checkForLogInReducer
  },
  defaultState,
);

export { profileReducer };

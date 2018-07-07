import { createAction } from 'redux-actions';

export interface LoginParams {
    username: string;
    password: string;
}

// ===================================
// login with username

export const LOGIN_WITH_EMAIL = 'LOGGIN_PAGE/LOGIN_WITH_EMAIL';
export type LOGIN_WITH_EMAIL = typeof LOGIN_WITH_EMAIL;

export const LOGIN = 'LOGGIN_PAGE/LOGIN';
export type LOGIN = typeof LOGIN;

export const LOGIN_IN_PROGRESS = 'LOGGIN_PAGE/LOGIN_IN_PROGRESS';
export type LOGIN_IN_PROGRESS = typeof LOGIN_IN_PROGRESS;

export const LOGIN_SUCCESSFULLY = 'LOGGIN_PAGE/LOGIN_SUCCESSFULLY';
export type LOGIN_SUCCESSFULLY = typeof LOGIN_SUCCESSFULLY;

export const LOGIN_ERROR = 'LOGGIN_PAGE/LOGIN_ERROR';
export type LOGIN_ERROR = typeof LOGIN_ERROR;

export interface LoginWithEmail {
    type: LOGIN_WITH_EMAIL;
    payload: LoginParams;
}

export interface LoginInProgress {
    type: LOGIN_IN_PROGRESS;
}

export interface LoginSuccessfully {
    type: LOGIN_SUCCESSFULLY;
}

export interface LoginError {
    type: LOGIN_ERROR;
    payload: { errorMessage: string };
    error: boolean;
}

export const loginWithEmail = createAction(
    LOGIN_WITH_EMAIL,
    (loginParams: LoginParams) => ({
        ...loginParams,
    })
);

export const loginInProgress = createAction(
    LOGIN_IN_PROGRESS
);

export const loginSuccessfully = createAction(LOGIN_SUCCESSFULLY);

export const loginError = createAction(LOGIN_ERROR);

// ===================================
// login with fb & gg

export const LOGIN_WITH_FB = 'LOGGIN_PAGE/LOGIN_WITH_FB';
export type LOGIN_WITH_FB = typeof LOGIN_WITH_FB;

export interface LoginWithFb {
    type: LOGIN_WITH_FB;
}

export const loginWithFb = createAction(LOGIN_WITH_FB);

export interface LoginWithGg {
    type: LOGIN_WITH_GG;
}

export const LOGIN_WITH_GG = 'LOGGIN_PAGE/LOGIN_WITH_GG';
export type LOGIN_WITH_GG = typeof LOGIN_WITH_GG;

export const loginWithGg = createAction(LOGIN_WITH_GG);

export type LoginPageAction =
    |LoginWithEmail
    | LoginInProgress
    | LoginSuccessfully
    | LoginError
    | LoginWithFb
    | LoginWithGg;

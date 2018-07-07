import LoginPageState from './state';
import { LoginWithEmail, LOGIN_WITH_EMAIL, LoginInProgress, LoginSuccessfully, LoginError, LOGIN_IN_PROGRESS, LOGIN_SUCCESSFULLY, LOGIN_ERROR, LoginWithFb, LOGIN_WITH_FB, LOGIN_WITH_GG } from './action';
import { handleActions } from 'redux-actions';

const initialState = {
    state: 0,
    username: '',
    errorMessage: '',
    callbackUrl: '',
    isBusy: false
};

const loginWithEmailReducer = (
    state: LoginPageState,
    action: LoginWithEmail,
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: ''
    };
};

const loginInProgressReducer = (
    state: LoginPageState,
    action: LoginInProgress,
) => {
    return {
        ...state,
        isBusy: true,
        errorMessage: ''
    };
};

const loginSuccessfullyReducer = (
    state: LoginPageState,
    action: LoginSuccessfully,
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: ''
    };
};

const loginErrorReducer = (
    state: LoginPageState,
    action: LoginError,
) => {
    return {
        ...state,
        isBusy: false,
        errorMessage: action.payload.errorMessage
    };
};

const loginWithFbReducer = (
    state: LoginPageState,
    action: LoginWithFb,
) => {
    return {
        ...state,
        isBusy: false,
    };
};

const loginWithGgReducer = (
    state: LoginPageState,
    action: LoginWithFb,
) => {
    return {
        ...state,
        isBusy: false,
    };
};

const loginPageReducer = handleActions<LoginPageState, any>(
    {
        [LOGIN_WITH_FB]: loginWithFbReducer,
        [LOGIN_WITH_GG]: loginWithGgReducer,
        [LOGIN_WITH_EMAIL]: loginWithEmailReducer,
        [LOGIN_IN_PROGRESS]: loginInProgressReducer,
        [LOGIN_SUCCESSFULLY]: loginSuccessfullyReducer,
        [LOGIN_ERROR]: loginErrorReducer
    },
    {
        ...initialState
    }
);

export { loginPageReducer };

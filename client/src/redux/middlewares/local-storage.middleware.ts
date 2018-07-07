import { MiddlewareAPI } from 'redux';
import { AppState } from '..';
import { UPDATE_USER_PROFILE, CLEAR_USER_PROFILE } from '../profile/action';

const TokenKey = 'token';
const localStorageMiddleware = ({
  getState,
}: MiddlewareAPI<any>) => next => action => {
  const returnValue = next(action);

  if (localStorage) {
    if (action.type === UPDATE_USER_PROFILE) {
      const state: AppState = getState();
      if (state.profile.token) {
        localStorage.setItem(TokenKey, state.profile.token);
      }
    } else if (action.type === CLEAR_USER_PROFILE) {
      localStorage.removeItem(TokenKey);
    }
  }

  return returnValue;
};

export default localStorageMiddleware;
export { TokenKey };

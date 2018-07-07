// import { RouteUrls } from '../../routes/routes.constant';
// import { push } from 'react-router-redux';
import {
  put,
  all, takeEvery
} from 'redux-saga/effects';
import {
  // logout,
  checkForLogIn, clearUserProfile, logout
} from './action';
import firebase from 'firebase';
import { push } from 'react-router-redux';
import { RouteUrls } from '../../routes/routes.constant';
import { message } from 'antd';
// import { AppState } from '..';

function* logoutWorker(): any {
  try {
    yield firebase.auth().signOut();
    message.success('Sign Out Successfully');
    //   const username = ((yield select()) as AppState).profile.username;
    yield put(clearUserProfile());
    //   yield put(loginWithUsername(username));
    yield put(push(RouteUrls.Login));
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
}

function* checkForLogInWorker(): any {
  try {
    yield firebase.auth().onAuthStateChanged((user) => {
      // tslint:disable-next-line:no-console
      // console.log(user);
    });

    // const isLoggedIn = yield fetch('http://localhost:3001/api/user');
    // // tslint:disable-next-line:no-console
    // console.log(isLoggedIn);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* profileSaga(): any {
  yield all([
    takeEvery(logout, logoutWorker),
    takeEvery(checkForLogIn, checkForLogInWorker)
  ]);
}

import { LoginWithEmail, loginWithEmail, loginInProgress, loginSuccessfully, loginError, LoginWithFb, loginWithFb, LoginWithGg, loginWithGg } from './action';
import { put, all, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';
// import config from '../../../config/config';
import { message } from 'antd';
import { updateUserProfile } from '../../profile/action';
import { push } from 'react-router-redux';
import { RouteUrls } from '../../../routes/routes.constant';
import firebase from 'firebase';

function* loginWithEmailWorker(action: LoginWithEmail): any {
    try {
        yield put(loginInProgress());
        try {
            const signIn = yield firebase.auth()
                .signInWithEmailAndPassword(action.payload.username, action.payload.password);

            if (signIn) {
                yield put(loginSuccessfully());
                message.success('Login Successfully');
                const getIdToken = yield firebase.auth().currentUser!.getIdToken(/* forceRefresh */ true);
                yield put(updateUserProfile(getIdToken, false));
                yield put(push(RouteUrls.Main));
            } else {
                yield put(loginError(signIn.message));
                message.error(signIn.data.message);
            }
            //     const response = yield axios.post(
            //     config.apiUrls + 'signin',
            //     {
            //         email: action.payload.username,
            //         password: action.payload.password
            //     }
            // );
            // if (response.data.user) {
            //     yield put(loginSuccessfully());
            //     message.success('Login Successfully');
            //     yield put(updateUserProfile(response.data.user.stsTokenManager.accessToken, false));
            //     yield put(push(RouteUrls.Main));
            // } else {
            //     yield put(loginError(response.data.message));
            //     message.error(response.data.message);
            // }
        } catch (error) {
            message.error('Login failed');
            // tslint:disable-next-line:no-console
            console.log(error);
        }
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    }
}

function* loginWithFbWorker(action: LoginWithFb): any {
    try {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().languageCode = 'en_EN';

        try {
            yield put(loginInProgress());
            const response = yield firebase.auth().signInWithPopup(provider);
            if (response.credential) {
                yield put(loginSuccessfully());
                message.success('Login Successfully');
                const getIdToken = yield firebase.auth().currentUser!.getIdToken(/* forceRefresh */ true);

                yield put(updateUserProfile(getIdToken, false));

                yield put(push(RouteUrls.Main));
            }
        } catch (err) {
            yield put(loginError(err.message));
            message.error(err.message);
            // tslint:disable-next-line:no-console
            console.log(err);
        }

    } catch (error) {
        message.error(error);
    }
}

function* loginWithGgWorker(action: LoginWithGg): any {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();

        try {
            yield put(loginInProgress());
            const response = yield firebase.auth().signInWithPopup(provider);
            if (response.credential) {
                yield put(loginSuccessfully());
                message.success('Login Successfully');
                const getIdToken = yield firebase.auth().currentUser!.getIdToken(/* forceRefresh */ true);

                yield put(updateUserProfile(getIdToken, false));

                yield put(push(RouteUrls.Main));
            }
        } catch (err) {
            yield put(loginError(err.message));
            message.error('Login failed');
            // tslint:disable-next-line:no-console
            console.log(err);
        }

    } catch (error) {
        message.error(error);
    }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export default function* loginPageSaga(): any {
    yield all([
        takeEvery(loginWithEmail, loginWithEmailWorker),
        takeEvery(loginWithFb, loginWithFbWorker),
        takeEvery(loginWithGg, loginWithGgWorker),
    ]);
}

import { SagaMiddleware } from 'redux-saga';
import loginPageSaga from './ui/login-page/saga';
import profileSaga from './profile/saga';

const runSagas = (sagaMiddleware: SagaMiddleware<{}>) => {
    sagaMiddleware.run(loginPageSaga);
    sagaMiddleware.run(profileSaga);
};

export default runSagas;

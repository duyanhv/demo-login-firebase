import {
    compose,
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { AppState } from './state';
import runSagas from './saga';
import { loginPageReducer } from './ui/login-page/reducer';
import { profileReducer } from './profile/reducer';
import localStorageMiddleware from './middlewares/local-storage.middleware';
const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();

const historyRouterMiddleware = routerMiddleware(history);

// create store
const store = reduxCreateStore<AppState>(
    combineReducers({
        profile: profileReducer,
        ui: combineReducers({
            loginPage: loginPageReducer,
        }),
        router: routerReducer,
    }),
    composeEnhancers(
        applyMiddleware(
            historyRouterMiddleware,
            sagaMiddleware,
            localStorageMiddleware
        )
    )
);

runSagas(sagaMiddleware);

export { store, history };

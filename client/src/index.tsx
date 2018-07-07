import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.less';
import registerServiceWorker from './registerServiceWorker';
import { store, history } from './redux/store';
import { ConnectedRouter } from 'react-router-redux';
import { Routes } from './routes';
import bootstrap from './bootstrap';

bootstrap().then(
    () => ReactDOM.render(
        <div className="app">
            <Provider store={store}>
                <ConnectedRouter history={history}>
                        <Routes />
                </ConnectedRouter>
            </Provider>
        </div>,
        document.getElementById('root')
    )
);
registerServiceWorker();

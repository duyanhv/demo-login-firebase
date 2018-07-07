import { Redirect, Switch, Route } from 'react-router';
import { RouteUrls } from './routes.constant';
import React from 'react';
import Page400 from './Error/Page400/Page400';
import Page403 from './Error/Page403/Page403';
import Page500 from './Error/Page500/Page500';
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';
import Authorize from '../components/Authorize/Authorize';

const RedirectToHome = () => {
    return <Redirect to={RouteUrls.Main} />;
};

const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={RedirectToHome} />
            <Route path={RouteUrls.Login} component={LoginPage} />
            {/* <Route path={RouteUrls.Register} component={RegisterPage} /> */}
            <Route path={RouteUrls.Page400} component={Page400} />
            <Route path={RouteUrls.Page403} component={Page403} />
            <Route path={RouteUrls.Page500} component={Page500} />
            <Route path={RouteUrls.Main} component={Authorize(MainPage)} />
            <Route component={Page400} />
        </Switch>
    );
};

export default Routes;

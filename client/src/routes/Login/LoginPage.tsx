import * as React from 'react';
import { Row, Col } from 'antd';
import {
  //  Dispatch,
  connect, Dispatch
} from 'react-redux';
import './LoginPage.less';
import LoginFooter from './LoginFooter';
import { AppState } from '../../redux';
// import {
//   LoginPageState,
//   LoginInProgressState,
//   login,
// } from '../../redux/ui/login-page';
import LoginForm from './LoginForm';
import { loginWithEmail, loginWithFb, loginWithGg } from '../../redux/ui/login-page/action';
// import { getI18nService } from '../../service-proxies/service.provider';
// import {
//   languageChange,
//   languageChangeSuccess,
//   AppSettingsState,
//   languageChangeFailed,
// } from '../../redux/app-settings';
// import _ from 'lodash';
// import { getErrorMessage, message } from '../../helpers';

interface LoginPageProps {
  // appSettings: AppSettingsState;
  // loginPage: LoginPageState;
  dispatch: Dispatch<any>;
  isBusy: boolean;
}

const LoginPage = (props: LoginPageProps) => {
  // const isBusy = props.loginPage.state === LoginInProgressState;

  const onLogin = (formInput: any) => {
    props.dispatch(
      loginWithEmail(
        {
          username: formInput.username,
          password: formInput.password
        }
      )
    );
  };

  const ggLogin = () => {
    props.dispatch(loginWithGg());
  };

  const fbLogin = () => {
    props.dispatch(loginWithFb());
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${require('../../images/login-register-bg.svg')})`,
      }}
    >
      <Row>
        <Col xs={0} sm={2} lg={4} />
        <Col xs={24} sm={20} lg={16}>
          <div className="container">
            <LoginForm
              onHandleSubmit={onLogin}
              isBusy={props.isBusy}
              // errorMessage={props.loginPage.errorMessage}
              // username={props.loginPage.username}
              {...props}
            />
            <LoginFooter
              fbLogin={fbLogin}
              ggLogin={ggLogin}
              {...props}
            />
          </div>
        </Col>
        <Col xs={0} sm={2} lg={4} />
      </Row>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  // appSettings: state.appSettings,
  loginPage: state.ui.loginPage,
  isBusy: state.ui.loginPage.isBusy
});

export default connect(mapStateToProps)(LoginPage);

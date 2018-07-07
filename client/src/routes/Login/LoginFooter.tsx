import * as React from 'react';
import './LoginFooter.less';
import { Icon, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
// import { TranslationFunction } from 'react-i18next';
// import languages from '../../constants/language.constant';

interface LoginFooterProps {
  // t: TranslationFunction;
  // langugeChange(language: string): void;
  fbLogin: () => void;
  ggLogin: () => void;
}

const LoginFooter = (props: LoginFooterProps) => {
  return (
    <div className="login-footer">
      <Row>
        <Link className="forgot-password" to="/forgot-password">
          {'LoginFooter.forgot'}
        </Link>
        <Link className="register-now" to="/register">
          {'LoginFooter.register'}
        </Link>
      </Row>
      <Row className="login-with">
        <Col>
          <span>{'LoginFooter.loginWith'}: </span>
          <a className="icon" href="#" onClick={props.fbLogin}>
            <Icon type="facebook" />
          </a>
          <a className="icon" href="#" onClick={props.ggLogin} style={{ color: 'red' }}>
            <Icon type="google" />
          </a>
        </Col>
      </Row>
      {/* <Row className="language">
        <Col>
          {languages.map(item => (
            <a
              className="icon"
              key={item.language}
              onClick={() => props.langugeChange(item.language)}
            >
              <span>
                <img src={require(`../../images/${item.img}`)} />
              </span>
            </a>
          ))}
        </Col>
      </Row> */}
    </div>
  );
};

export default LoginFooter;

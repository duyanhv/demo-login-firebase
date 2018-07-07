import * as React from 'react';
import { Button } from 'antd';
import './Page403.less';
import { Link } from 'react-router-dom';

const Page403 = () => {
  return (
    <div className="page-403">
      <div className="page-403-image">
        <img src={require('./Page403.svg')} alt="Forbidden Resources" />
      </div>

      <div className="page-403-content">
        <h1>403 - Forbidden</h1>
        <p>Sorry, Your requested resource is forbidden.</p>
        <Button type="primary">
          <Link to="/">Go to Home Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page403;

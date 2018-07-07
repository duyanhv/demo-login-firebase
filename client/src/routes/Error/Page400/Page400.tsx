import * as React from 'react';
import { Button } from 'antd';
import './Page400.less';
import { Link } from 'react-router-dom';

const Page400 = () => {
  return (
    <div className="page-400">
      <div className="page-400-image">
        <img src={require('./Page400.svg')} alt="Not Found Resources" />
      </div>

      <div className="page-400-content">
        <h1>400 - Not Found</h1>
        <p>Sorry, Your requested resource is missing.</p>
        <Button type="primary">
          <Link to="/">Go to Home Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page400;

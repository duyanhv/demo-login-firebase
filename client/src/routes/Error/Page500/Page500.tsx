import * as React from 'react';
import { Button } from 'antd';
import './Page500.less';
import { Link } from 'react-router-dom';

const Page500 = () => {
  return (
    <div className="page-500">
      <div className="page-500-image">
        <img src={require('./Page500.svg')} alt="Internal Server Error" />
      </div>

      <div className="page-500-content">
        <h1>500 - Server Error</h1>
        <p>Sorry, Some error may happen in our server.</p>
        <Button type="primary">
          <Link to="/">Go to Home Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page500;

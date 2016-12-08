import React from 'react';
import YeomanImage from './YeomanImage';
import './app.css';

import Sidebar from './Sidebar'

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <Sidebar />

        <YeomanImage />
        <div className="notice">
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

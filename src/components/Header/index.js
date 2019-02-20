import React from 'react';
import PropTypes from 'prop-types';
import { containerStyle, headerButton, headerP } from '../../styles/header';

function Header(props) {
  const { buttonStatus } = props;
  return (
    <div className="header" style={containerStyle}>
      <h2 style={{ marginLeft: 10 }}>Mentor dashboard</h2>
      <div>
        { buttonStatus === 'authorized'
          && <p style={headerP}>UserName</p>
        }
        <p style={headerP}>Hello world</p>
        <button type="submit" style={headerButton}>Login</button>
      </div>
    </div>
  );
}


export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import { containerStyle } from '../../styles/header';
import Login from '../Log-in';
import Logout from '../Log-out';

function View(props) {
  const {
    data, onClickLogin, onClickLogout, handleChange,
  } = props;
  // const { authStatus, userName } = data;
  const { userName, userStatus } = data;

  return (
    <div className="header" style={containerStyle}>
      <h2 style={{ marginLeft: 10 }}>Mentor dashboard</h2>
      {userStatus === 'unauthorised'
        ? <Login onClickLogin={onClickLogin} change={handleChange} />
        : <Logout onClickLogout={onClickLogout} userName={userName} />
          }
    </div>
  );
}

View.propTypes = {
  onClickLogout: PropTypes.func.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};


export default View;

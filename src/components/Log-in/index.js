import React from 'react';
import PropTypes from 'prop-types';
import { headerButton, headerP } from '../../styles/header';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: 100,
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginRight: 10,
};

function Login(props) {
  const { onClickLogin, change } = props;

  return (
    <div style={containerStyle}>
      <p style={headerP}>Enter github account</p>
      <input type="text" onChange={change} style={{ minHeight: 20 }} />
      <button type="submit" onClick={onClickLogin} style={headerButton}>Login</button>
    </div>
  );
}

Login.propTypes = {
  onClickLogin: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};


export default Login;

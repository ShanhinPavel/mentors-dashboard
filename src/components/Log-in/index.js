import React from 'react';
import PropTypes from 'prop-types';
import { headerButton, headerP } from '../../styles/header';
import { containerStyle } from '../../styles/login';

/*
*This component render login menu. It takes three parametres.
  If a user enter wrong login he gives a message.
*/
function Login(props) {
  const { onClickLogin, change, message } = props;

  return (
    <div style={containerStyle}>
      { /* This message appears when user enters wrong login */ }
      {message === 'error' && <p style={{ color: 'red' }}>Wrong login!</p>}
      <p style={headerP}>Enter github account</p>
      <input type="text" onChange={change} style={{ minHeight: 20 }} />
      <button type="submit" onClick={onClickLogin} style={headerButton}>Login</button>
    </div>
  );
}

Login.propTypes = {
  onClickLogin: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};


export default Login;

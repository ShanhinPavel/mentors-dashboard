import React from 'react';
import PropTypes from 'prop-types';
import buttonStyle from '../../styles/login';

function LoginButton(props) {
  let buttonTitle = 'Log in';
  const { flag } = props;
  if (flag === 'true') {
    buttonTitle = 'Login';
  } else {
    buttonTitle = 'Logout';
  }

  return (
    <div style={buttonStyle}>
      <a href="http://localhost:3000/" style={{ textDecoration: 'none' }}>{buttonTitle}</a>
    </div>
  );
}

LoginButton.propTypes = {
  flag: PropTypes.string.isRequired,
};

export default LoginButton;

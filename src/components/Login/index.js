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

  const key = {
    clientID: '0aef0ba45b9e01f7c40e',
    clientSecret: 'f940de19a47c1d1e28418700e304851121fe7864',
  };

  const redirectUrl = 'https://shanhinpavel.github.io/mentors-dashboard/';
  const authUrl = `http://github.com/login/oauth/authorize?client_id=${key.clientID}redirect_uri=${redirectUrl}`;

  return (
    <div style={buttonStyle}>
      <a href={authUrl} style={{ textDecoration: 'none' }}>{buttonTitle}</a>
    </div>
  );
}

LoginButton.propTypes = {
  flag: PropTypes.string.isRequired,
};

export default LoginButton;

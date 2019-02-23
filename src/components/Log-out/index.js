import React from 'react';
import PropTypes from 'prop-types';
import { headerButton, headerP } from '../../styles/header';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  marginRight: 10,
  minHeight: 'inherit',
};

function Logout(props) {
  const { onClickLogout, userName } = props;
  return (
    <div style={containerStyle}>
      <p style={headerP}>{userName}</p>
      <button type="submit" onClick={onClickLogout} style={headerButton}>Logout</button>
    </div>
  );
}

Logout.propTypes = {
  onClickLogout: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Logout;

import React from 'react';
import PropTypes from 'prop-types';
import { headerButton, headerP } from '../../styles/header';
import containerStyle from '../../styles/logout';

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

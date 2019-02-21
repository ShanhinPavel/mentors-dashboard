import React from 'react';
import PropTypes from 'prop-types';
import { containerStyle, headerButton, headerP } from '../../styles/header';

function View(props) {
  const { authorisation, onClickLogin, onClickLogout } = props;

  return (
    <div className="header" style={containerStyle}>
      <h2 style={{ marginLeft: 10 }}>Mentor dashboard</h2>
      <div>
        {authorisation === 'unauthorised'
          ? <button type="submit" onClick={onClickLogout} style={headerButton}>Sing in</button>
          : <button type="submit" onClick={onClickLogin} style={headerButton}>Sing out</button>
        }
      </div>
    </div>
  );
}

View.propTypes = {
  onClickLogout: PropTypes.func.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  authorisation: PropTypes.string.isRequired,
};


export default View;

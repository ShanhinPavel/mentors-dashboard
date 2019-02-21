import React from 'react';

const loginContainer = {
  width: 200,
  height: 200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 200,
};

const darkSide = {
  background: 'rgba(255, 255, 255, 0.5)',
  backgroundSize: 'cover',
  zIndex: 100,
};

function View(props) {
  return (
    <div style={darkSide}>
      <div style={loginContainer}>
        <button type="submit">Login</button>
      </div>
    </div>
  );
}

export default View;

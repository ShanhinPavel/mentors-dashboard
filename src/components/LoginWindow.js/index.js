import React from 'react';
import View from './View';

class LoginWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'login' };
  }

  render() {
    return (
      <View />
    );
  }
}

export default LoginWindow;

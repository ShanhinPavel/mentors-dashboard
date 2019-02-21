/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import View from './View';
import fb from '../../firebase_service';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { authorisation: 'unauthorised', user: 'kolia' };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    fb.login().then((result) => {
      console.log('Sign-in successful');
      console.log(result.user);
      // this.setState({ authorisation: 'authorised', user: result.user });
    });
  }

  logout() {
    fb.logout().then(() => {
      console.log('Sign-out successful');
      this.setState({ authorisation: 'unauthorised' });
    });
  }

  render() {
    const { authorisation } = this.state;
    return (
      <View authorisation={authorisation} onClickLogin={this.login} onClickLogout={this.logout} />
    );
  }
}

export default Header;

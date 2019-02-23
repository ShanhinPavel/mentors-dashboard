/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import View from './View';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userName: null };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputText = event.target.value;
    this.setState({ userName: inputText });
  }

  login() {
    const { changePermission } = this.props;
    const { userName } = this.state;
    changePermission(userName);
    this.setState({ userName: '' });
  }

  logout() {
    const { changePermission } = this.props;
    changePermission('logout');
  }

  render() {
    const { data } = this.props;
    const { userStatus, userName, message } = data;
    const info = { userStatus, message };

    if (userStatus === 'authorised') {
      info.userName = userName;
    }

    return (
      <View data={info} onClickLogin={this.login} onClickLogout={this.logout} handleChange={this.handleChange} />
    );
  }
}

Header.propTypes = {
  changePermission: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.string),
};


export default Header;

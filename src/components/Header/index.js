/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
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
  }

  logout() {
    const { changePermission } = this.props;
    changePermission('');
  }

  render() {
    const { userStatus, userName } = this.props;
    const data = { userStatus };

    if (userStatus === 'authorised') {
      data.userName = userName;
    }

    return (
      <View data={data} onClickLogin={this.login} onClickLogout={this.logout} handleChange={this.handleChange} />
    );
  }
}

Header.propTypes = {
  changePermission: PropTypes.func.isRequired,
  userStatus: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};


export default Header;

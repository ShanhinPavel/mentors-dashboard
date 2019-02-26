/* eslint-disable max-len */
import React from 'react';
import { instanceOf, string } from 'prop-types';
import Select from '../Select';
import Header1 from '../Header/index';
import { tableWraper, appStyle } from '../../styles/app';
import Designations from '../Designations';
import Info from '../Info';
import checkMentorName from './utils/checkMentorName';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userStatus: 'unauthorised', userName: null, message: 'good' };
    this.changeUserPermission = this.changeUserPermission.bind(this);
  }

  /*
    *This function examines if user is a mentor of Rolling scopes school.
    Depend on mentor's checking  we set a permission of watching some part of application for user.
  */
  changeUserPermission(inputText) {
    const { data } = this.props;
    const { mentor } = data;

    const checkedMentor = checkMentorName(inputText, mentor);
    const { condition, mentorName } = checkedMentor;

    if (condition) {
      this.setState({ userStatus: 'authorised', userName: mentorName, message: 'good' });
    } if (!condition && (mentorName !== 'logout' || '')) {
      this.setState({ userStatus: 'unauthorised', message: 'error' });
    } else if (!condition) this.setState({ userStatus: 'unauthorised' });
  }

  render() {
    const { userStatus, userName, message } = this.state;
    const { data } = this.props;
    let { name } = this.props;
    const { allMentorsNames, mentor, tasks } = data;
    // if name does not in localstorage yet
    if (name === '') {
      name = 'a-yatskevich';
    }

    return (
      <div className="one" style={appStyle}>
        <Header1 changePermission={this.changeUserPermission} data={{ userStatus, userName, message }} />
        {userStatus === 'unauthorised'
          ? <Info />
          : (
            <div style={tableWraper}>
              <Select data={allMentorsNames} name={name} tasks={tasks} mentors={mentor} />
              <Designations />
            </div>
          )
        }
      </div>
    );
  }
}

App.propTypes = {
  data: instanceOf(Object).isRequired,
  name: string.isRequired,
};

export default App;

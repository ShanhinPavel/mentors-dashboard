/* eslint-disable max-len */
import React from 'react';
import { instanceOf, string } from 'prop-types';
import Select from '../Select';
import Header1 from '../Header/index';
import { tableWraper, appStyle } from '../../styles/app';
import Designations from '../Designations';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userStatus: 'unauthorised', userName: null };
    this.changeUserPermission = this.changeUserPermission.bind(this);
  }

  changeUserPermission(inputText) {
    const { data } = this.props;
    const { allMentorsNames } = data;

    const mentorName = inputText.toLowerCase();
    const condition = allMentorsNames.includes(mentorName);

    if (condition) {
      this.setState({ userStatus: 'authorised', userName: mentorName });
    } else this.setState({ userStatus: 'unauthorised' });
  }

  render() {
    const { userStatus, userName } = this.state;
    const { data } = this.props;
    let { name } = this.props;
    const { allMentorsNames, mentor, tasks } = data;
    // if name does not in localstorage yet
    if (name === '') {
      name = 'a-yatskevich';
    }

    return (
      <div className="one" style={appStyle}>
        <Header1 changePermission={this.changeUserPermission} userStatus={userStatus} userName={userName} />
        {userStatus === 'unauthorised'
          ? <p>This application shows mentors their student.</p>
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

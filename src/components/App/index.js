import React from 'react';
import { instanceOf, string } from 'prop-types';
import Select from '../Select';
import Header from '../Header/index';
import { tableWraper, appStyle } from '../../styles/app';
import Designations from '../Designations';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userStatus: 'unregisterd' };
  }

  render() {
    const { userStatus } = this.state;
    const { data } = this.props;
    let { name } = this.props;
    const { allMentorsNames, mentor, tasks } = data;
    // if name does not in localstorage yet
    if (name === '') {
      name = 'a-yatskevich';
    }

    return (
      <div className="one" style={appStyle}>
        <Header />
        {userStatus === 'registered'
      && (
      <div style={tableWraper}>
        <Select data={allMentorsNames} name={name} tasks={tasks} mentors={mentor} />
        <Designations />
      </div>
      )}
        {userStatus === 'unregistered'
    && <p>This application shows mentors their student.</p>}
      </div>
    );
  }
}

App.propTypes = {
  data: instanceOf(Object).isRequired,
  name: string.isRequired,
};

export default App;

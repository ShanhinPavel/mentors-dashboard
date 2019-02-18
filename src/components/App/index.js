/* eslint-disable no-undef */
import React from 'react';
import { instanceOf, string } from 'prop-types';
import Select from '../Select';
import LoginButton from '../Login/index';
// import containerStyle from '../../styles/app';

function App(props) {
  const { data } = props;
  let { name } = props;
  const { allMentorsNames, mentor, tasks } = data;
  // if name does not in localstorage yet
  if (name === '') {
    name = 'a-yatskevich';
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Select data={allMentorsNames} name={name} tasks={tasks} mentors={mentor} />
      <LoginButton flag="true" />
    </div>
  );
}

App.propTypes = {
  data: instanceOf(Object).isRequired,
  name: string.isRequired,
};

export default App;

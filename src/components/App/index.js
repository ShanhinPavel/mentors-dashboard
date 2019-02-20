/* eslint-disable no-undef */
import React from 'react';
import { instanceOf, string } from 'prop-types';
import Select from '../Select';
import Header from '../Header/index';
import { tableWraper, appStyle } from '../../styles/app';
import Designations from '../Designations';

function App(props) {
  const { data } = props;
  let { name } = props;
  const { allMentorsNames, mentor, tasks } = data;
  // if name does not in localstorage yet
  if (name === '') {
    name = 'a-yatskevich';
  }

  return (
    <div className="one" style={appStyle}>
      <Header />
      <div style={tableWraper}>
        <Select data={allMentorsNames} name={name} tasks={tasks} mentors={mentor} />
        <Designations />
      </div>
    </div>
  );
}

App.propTypes = {
  data: instanceOf(Object).isRequired,
  name: string.isRequired,
};

export default App;

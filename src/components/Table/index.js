import React from 'react';
import { instanceOf } from 'prop-types';
import Controller from './Controller';

// this component renders the table with students and mentor tasks
function Table(props) {
  const { tasks, mentorObject } = props;
  return (
    <Controller tasks={tasks} mentorObject={mentorObject} />
  );
}

Table.propTypes = {
  tasks: instanceOf(Object).isRequired,
  mentorObject: instanceOf(Object).isRequired,
};

export default Table;

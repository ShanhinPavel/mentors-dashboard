import React from 'react';
import { instanceOf } from 'prop-types';
import Controller from './Controller';

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

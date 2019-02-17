import React from 'react';
import { instanceOf } from 'prop-types';
import View from './View';
import getRowsOfTasks from './utils/getRowsOfTasks';
import getRowsOfStudentsTasks from './utils/getRowsOfStudentsTasks';

function Controller(props) {
  const { tasks, mentorObject } = props;

  const rowsOfTasks = getRowsOfTasks(tasks);
  const rowsOfStudentTasks = getRowsOfStudentsTasks(mentorObject, tasks);

  return (
    <View rowsOfTasks={rowsOfTasks} rowsOfStudentTasks={rowsOfStudentTasks} />
  );
}

Controller.propTypes = {
  tasks: instanceOf(Object).isRequired,
  mentorObject: instanceOf(Object).isRequired,
};

export default Controller;

import React from 'react';
import PropTypes from 'prop-types';
import View from './View';
import getListMarkedWithColor from './utils/getListMarkedWithColor';

function Controller(props) {
  const { markingTask, markingStudents } = props;

  // Create arrays with node elements
  const tasksMarkers = getListMarkedWithColor(markingTask);
  const studentMarkers = getListMarkedWithColor(markingStudents);

  return (
    <View tasksMarkers={tasksMarkers} studentMarkers={studentMarkers} />
  );
}

Controller.propTypes = {
  markingStudents: PropTypes.object.isRequired,
  markingTask: PropTypes.object.isRequired,
};

export default Controller;

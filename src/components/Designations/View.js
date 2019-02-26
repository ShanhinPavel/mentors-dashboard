import React from 'react';
import PropTypes from 'prop-types';
import {
  designationContainer, desinationTitle, listContainer, listTitle,
} from '../../styles/designations';

function View(props) {
  const { tasksMarkers, studentMarkers } = props;

  return (
    <div style={designationContainer}>
      <h2 style={desinationTitle}>Designations</h2>
      <div style={listContainer}>
        <div>
          <h3 style={listTitle}>Tasks status</h3>
          {tasksMarkers}
        </div>
        <div>
          <h3 style={listTitle}>Task perfoming by students</h3>
          {studentMarkers}
        </div>
      </div>
    </div>
  );
}

View.propTypes = {
  tasksMarkers: PropTypes.arrayOf(PropTypes.node).isRequired,
  studentMarkers: PropTypes.arrayOf(PropTypes.node).isRequired,
};


export default View;

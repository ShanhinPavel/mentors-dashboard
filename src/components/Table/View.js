/* eslint-disable max-len */
import React from 'react';
import {
  objectOf, any, arrayOf, object,
} from 'prop-types';
import {
  table, tableHeader, headerTaskColumn, headerStudentsColumn, tableBody, tasksColumn, studentsColumn,
} from '../../styles/table';

function View(props) {
  const { rowsOfTasks, rowsOfStudentTasks } = props;

  return (
    <div className="table" style={table}>

      <div className="table__header" style={tableHeader}>
        <div className="header__task-column" style={headerTaskColumn}>
          <h3>Tasks</h3>
        </div>
        <div className="header__students-column" style={headerStudentsColumn}>
          <h3>Students</h3>
        </div>
      </div>

      <div className="table__body" style={tableBody}>
        <div className="tasksColumn" style={tasksColumn}>
          {rowsOfTasks}
        </div>
        <div className="students-rows" style={studentsColumn}>
          {rowsOfStudentTasks}
        </div>
      </div>
    </div>
  );
}

View.propTypes = {
  rowsOfTasks: objectOf(any).isRequired,
  rowsOfStudentTasks: arrayOf(object).isRequired,
};

export default View;

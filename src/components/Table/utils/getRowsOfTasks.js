import React from 'react';
import getTaskColorStatus from './getTaskColorStatus';
import { taskRow, emptyCell } from '../../../styles/table';

/*
*This function create task's elements.
*/
const getRowsOfTasks = (objectOfTasks) => {
  const { listOfTasks } = objectOfTasks;

  const tasksRows = listOfTasks.map((titleOfTask, taskIndex) => {
    const taskObject = objectOfTasks[titleOfTask];
    const { title, link, status } = taskObject;
    const taskId = 1 + taskIndex;

    const colorStatus = getTaskColorStatus(status);

    return (
      <div className="row__task" key={`task_${taskId}`} style={taskRow}>
        <div className="task__cell" style={colorStatus}>
          <a href={link}>
            {title}
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="task-container" style={tasksRows}>
      <div className="empty-cell" style={emptyCell}>55555</div>
      {tasksRows}
    </div>
  );
};

export default getRowsOfTasks;

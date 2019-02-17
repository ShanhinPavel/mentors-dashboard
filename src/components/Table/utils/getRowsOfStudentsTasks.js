import React from 'react';
import getStudTaskColorStatus from './getStudTaskColorStatus';
import { studentColumn } from '../../../styles/table';

/*
*This function creates rows with students
*/
const getRowsOfStudentsTasks = (objectOfMentor, objectOfTasks) => {
  const { listOfTasks } = objectOfTasks;
  const { listOfStudents, students } = objectOfMentor;

  const studentsRows = listOfStudents.map((nameOfStudent) => {
    const student = students[nameOfStudent];
    const { github, githubLink, tasks } = student;

    const studentTasks = listOfTasks.map((tasksTitle, index) => {
      const currentTask = tasks[tasksTitle];
      const { status, mark, pullRequest } = currentTask;
      const taskNumber = 1 + index;

      const colorStatus = getStudTaskColorStatus(status, mark);

      return (
        <div className="student-column" key={`${github}-task_${taskNumber}`} style={studentColumn}>
          <div style={colorStatus}>
            <a href={pullRequest}>{mark}</a>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div style={{ borderRight: '1px solid black', minWidth: 100, textAlign: 'center' }}>
          <a href={githubLink}>{github}</a>
        </div>
        {studentTasks}
      </div>
    );
  });

  return studentsRows;
};

export default getRowsOfStudentsTasks;

import React from 'react';
import getStudTaskColorStatus from './getStudTaskColorStatus';
import { studentColumn } from '../../../styles/table';

/*
*This function creates rows with students
*/
const getRowsOfStudentsTasks = (objectOfMentor, objectOfTasks) => {
  const { listOfTasks } = objectOfTasks;
  const { listOfStudents, students } = objectOfMentor;
  // Iterate for array of students
  const studentsRows = listOfStudents.map((nameOfStudent, index) => {
    const student = students[nameOfStudent];
    const { github, githubLink, tasks } = student;
    const studentId = 1 + index;
    // iterate for array of tasks
    const studentTasks = listOfTasks.map((tasksTitle, index1) => {
      const currentTask = tasks[tasksTitle];
      const { status, mark, pullRequest } = currentTask;
      const taskNumber = 1 + index1;
      // get color market of tasks
      const colorStatus = getStudTaskColorStatus(status, mark);
      // create marked task of student
      return (
        <div className="student-column" key={`${github}-task_${taskNumber}`} style={studentColumn}>
          <div style={colorStatus}>
            <a href={pullRequest} target="_blank" rel="noopener noreferrer">{mark}</a>
          </div>
        </div>
      );
    });
    // create student container with completed or uncompleted tasks
    return (
      <div key={`student_${studentId}`}>
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

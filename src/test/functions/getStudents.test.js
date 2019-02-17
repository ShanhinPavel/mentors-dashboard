import getStudents from '../../../gettingData/excelToJson/main_functions/getStudents';
import getWorkbook from '../../../gettingData/excelToJson/main_functions/getWorkbook';

const tasksSheet = getWorkbook('Tasks.xlsx', 0);
const madeTasks = getWorkbook('Mentor score.xlsx', 0);

describe('The function "getStudents"', () => {
  const students = getStudents(madeTasks, tasksSheet);

  test('This function returns object', () => {
    expect(typeof students).toBe('object');
  });

  test('This function does not return array', () => {
    expect(Array.isArray(students)).toBeFalsy();
  }) 

  test('There are students: "shanhinpavel", "sozonikoleg", "kiryllapouski" in returned object', () => {
    expect(students.shanhinpavel).toBeTruthy();
    expect(students.sozonikoleg).toBeTruthy();
    expect(students.kiryllapouski).toBeTruthy();
  });

  test('Object "shanhinpavel" has to have properties: "github", "githubLink", "mentorGithub", "tasks"', () => {
    expect(students.shanhinpavel).toHaveProperty('github');
    expect(students.shanhinpavel).toHaveProperty('mentorGithub');
    expect(students.shanhinpavel).toHaveProperty('tasks');
    expect(students.shanhinpavel).toHaveProperty('githubLink');
  });

  test('Object "shanhinpavel" has to have 10 tasks in "task" property', () => {
    const studentShanhin = students.shanhinpavel;
    const studentTasks = studentShanhin.tasks;
    const arrayOfTasksTitles = Object.keys(studentTasks);

    expect(arrayOfTasksTitles).toHaveLength(10);
    
  });
});
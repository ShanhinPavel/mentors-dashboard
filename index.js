const { writeFile } = require('fs');
const getWorkbook = require('./gettingData/excelToJson/main_functions/getWorkbook');
const getMentors = require('./gettingData/excelToJson/main_functions/getMentors');
const getTasks = require('./gettingData/excelToJson/main_functions/getTasks');
const getTotalJson = require('./gettingData/excelToJson/main_functions/getTotalJson');
const getStudents = require('./gettingData/excelToJson/main_functions/getStudents');


// Get excel files, transform to jsonObjects
const mentorsSheet = getWorkbook('Mentor-students pairs.xlsx', 1);
const tasksSheet = getWorkbook('Tasks.xlsx', 0);
const madeTasks = getWorkbook('Mentor score.xlsx', 0);

// Get collections
const mentorStudentCollection = getMentors(mentorsSheet);
const students = getStudents(madeTasks, tasksSheet);
const tasks = getTasks(tasksSheet, false);
const totalJson = getTotalJson(mentorStudentCollection, students, tasks);

writeFile('./src/mentor-student.json', totalJson, () => {
  console.log('file is created');
});

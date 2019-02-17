import { writeFileSync } from 'fs';
import getWorkbook from './gettingData/excelToJson/main_functions/getWorkbook';
import getMentors from './gettingData/excelToJson/main_functions/getMentors';
import getTasks from './gettingData/excelToJson/main_functions/getTasks';
import getTotalJson from './gettingData/excelToJson/main_functions/getTotalJson';
import getStudents from './gettingData/excelToJson/main_functions/getStudents';

// Get excel files, transform to jsonObjects
const mentorsSheet = getWorkbook('Mentor-students pairs.xlsx', 1);
const tasksSheet = getWorkbook('Tasks.xlsx', 0);
const madeTasks = getWorkbook('Mentor score.xlsx', 0);

// Get collections
const mentorStudentCollection = getMentors(mentorsSheet);
const students = getStudents(madeTasks, tasksSheet);
const tasks = getTasks(tasksSheet, false);
const totalJson = getTotalJson(mentorStudentCollection, students, tasks);

writeFileSync('./src/mentor-student.json', totalJson);

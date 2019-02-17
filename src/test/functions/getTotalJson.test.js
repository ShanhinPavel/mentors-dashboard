import getWorkbook from '../../../gettingData/excelToJson/main_functions/getWorkbook';
import getMentors from '../../../gettingData/excelToJson/main_functions/getMentors';
import getTasks from '../../../gettingData/excelToJson/main_functions/getTasks';
import getTotalJson from '../../../gettingData/excelToJson/main_functions/getTotalJson';
import getStudents from '../../../gettingData/excelToJson/main_functions/getStudents';

// Get excel files, transform to jsonObjects
const mentorsSheet = getWorkbook('Mentor-students pairs.xlsx', 1);
const tasksSheet = getWorkbook('Tasks.xlsx', 0);
const madeTasks = getWorkbook('Mentor score.xlsx', 0);

// Get collections
const mentorStudentCollection = getMentors(mentorsSheet);
const students = getStudents(madeTasks, tasksSheet);
const tasks = getTasks(tasksSheet, false);
const totalJson = getTotalJson(mentorStudentCollection, students, tasks);

describe('The function "getTotalJson"', () => {
  const objectFromJson = JSON.parse(totalJson);

  test('The function returns value type "string"', () => {
    expect(typeof totalJson).toBe('string');
  });

  test('The returned value contain properties "allMentorsNames", "tasks", "mentor"', () => {
    expect(objectFromJson).toHaveProperty('allMentorsNames');
    expect(objectFromJson).toHaveProperty('tasks');
    expect(objectFromJson).toHaveProperty('mentor');
  });

  test('All properties have values not null', () => {
    expect(Array.isArray(objectFromJson.allMentorsNames)).toBeTruthy();
    expect(typeof objectFromJson.tasks).toBe('object');
    expect(typeof objectFromJson.mentor).toBe('object');
  })

  test('There is the mentor "nikolaiverbitskii" which has 2 students("shanhinpavel", "igor82bv")', () => {
    const mentorNikolaiverbitskii = objectFromJson.mentor.nikolaiverbitskii; 
    const student1 = 'shanhinpavel';
    const student2= 'igor82bv';

    expect(objectFromJson.mentor).toHaveProperty('nikolaiverbitskii');
    expect(mentorNikolaiverbitskii.listOfStudents).toHaveLength(2);
    expect(mentorNikolaiverbitskii.listOfStudents.includes(student1)).toBeTruthy();
    expect(mentorNikolaiverbitskii.listOfStudents.includes(student2)).toBeTruthy();
    expect(mentorNikolaiverbitskii.students).toHaveProperty(student1);
    expect(mentorNikolaiverbitskii.students).toHaveProperty(student2);
  });

  test('Amount of mentor objects is 150', () => {
    const arrayOfMentors = Object.keys(objectFromJson.mentor);
    const amountOfMentorsObjects = arrayOfMentors.length;
    const lengthOfMentorsNames = objectFromJson.allMentorsNames.length;

    expect(amountOfMentorsObjects).toBe(lengthOfMentorsNames);
  });
});
import getMentors from '../../../gettingData/excelToJson/main_functions/getMentors';
import getWorkbook from '../../../gettingData/excelToJson/main_functions/getWorkbook';

const mentorSheet = getWorkbook('Mentor-students pairs.xlsx', 1);

describe('Function "getMentors"', () => {
  const mentors = getMentors(mentorSheet);

  test('This function returns object', () => {
    expect(typeof mentors).toBe('object');
  });

  test('Amount of mentors have to be 150', () => {
    const listOfMentorsGithubs = Object.keys(mentors);
    expect(listOfMentorsGithubs).toHaveLength(150);
  });

  test('There are mentors: "maximuk", "davojta", "lavitr" in returned object', () => {
    expect(mentors.maximuk).toBeTruthy();
    expect(mentors.davojta).toBeTruthy();
    expect(mentors.lavitr).toBeTruthy();
  });

  test('Object "maximuk" has to have properties: "fullName", "github", "githubLink"', () => {
    expect(mentors).toHaveProperty('maximuk.fullName');
    expect(mentors).toHaveProperty('maximuk.github');
    expect(mentors).toHaveProperty('maximuk.githubLink');
  });

  test('Object "maximuk" has to have values of properties type "string"', () => {
    const mentorMaximuk = mentors.maximuk;
    expect(typeof mentorMaximuk.fullName).toBe('string');
    expect(typeof mentorMaximuk.github).toBe('string');
    expect(typeof mentorMaximuk.githubLink).toBe('string');
  });
});

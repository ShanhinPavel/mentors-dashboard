import Student from '../../../gettingData/excelToJson/classes/Student';

describe('The "Student" function', () => {
  const studentGithub = 'jackdaniel';
  const student = new Student('jackdaniel', 'jackRassel', 'tasks');

  test('Check that the calling "Student" function returns object not array', () => {
    expect(typeof student).toBe('object');
    expect(Array.isArray(student)).toBeFalsy();
  });

  test('Check if a returned object is instance of "Student"', () => {
    expect(student).toBeInstanceOf(Student);
  });

  test('Check if property "githubLink" has view "https://github.com/given value"', () => {
    expect(student.githubLink).toMatch(new RegExp(`https://github.com/${studentGithub}`));
  })

  test('Check are there properties: "github", "githubLink", "mentorGithub" in created object', () => {
    expect(student).toHaveProperty('github');
    expect(student).toHaveProperty('githubLink');
    expect(student).toHaveProperty('mentorGithub');
  });

  test('Check if values of properties have type "string"', () => {
    expect(typeof student.github).toBe('string');
    expect(typeof student.githubLink).toBe('string');
    expect(typeof student.mentorGithub).toBe('string');
  });
});
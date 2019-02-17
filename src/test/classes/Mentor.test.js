import Mentor from '../../../gettingData/excelToJson/classes/Mentor';

describe('The "Mentor" function', () => {
  const mentor = new Mentor('Ivan Kovalev', 'kovalev', 'github.com/kovalev');

  test('Check that the calling "Mentor" function returns object and not array', () => {
    expect(typeof mentor).toBe('object');
    expect(Array.isArray(mentor)).toBeFalsy();
  });

  test('Check if a returned object is instance of "Mentor"', () => {
    expect(mentor).toBeInstanceOf(Mentor);
  });

  test('Check if there are properties: "fullName", "github", "githubLink", in created object', () => {
    expect(mentor).toHaveProperty('fullName');
    expect(mentor).toHaveProperty('github');
    expect(mentor).toHaveProperty('githubLink');
  });

  test('Check if there are properties: "listOfStudents" and value has type "array"', () => {
    expect(mentor).toHaveProperty('listOfStudents');
    expect(Array.isArray(mentor.listOfStudents)).toBeTruthy();
  });

  test('Check if there is a property "students" and its value has type "object" not "array"', () => {
    expect(mentor).toHaveProperty('students');
    expect(typeof mentor).toBe('object');
    expect(Array.isArray(mentor.students)).toBeFalsy();
  });

  test('Check if values of properties "fullName", "github", "githubLink" have type "string"', () => {
    expect(typeof mentor.fullName).toBe('string');
    expect(typeof mentor.github).toBe('string');
    expect(typeof mentor.githubLink).toBe('string');
  });
});
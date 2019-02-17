import Task from '../../../gettingData/excelToJson/classes/Task';

describe('The "Task" function', () => {
  const task = new Task('Presentation', 'github.com/Presentation', 'Checked');

  test('Check that the calling "Task" function returns object and not array', () => {
    expect(typeof task).toBe('object');
    expect(Array.isArray(task)).toBeFalsy();
  });

  test('Check if a returned object is instance of "Task"', () => {
    expect(task).toBeInstanceOf(Task);
  });

  test('Check if there are properties: "title", "link", "status" in created object', () => {
    expect(task).toHaveProperty('title');
    expect(task).toHaveProperty('link');
    expect(task).toHaveProperty('status');
  });

  test('Check if values of properties have type "string"', () => {
    expect(typeof task.title).toBe('string');
    expect(typeof task.link).toBe('string');
    expect(typeof task.status).toBe('string');
  });
});
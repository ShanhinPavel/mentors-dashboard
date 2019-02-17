import getTasks from '../../../gettingData/excelToJson/main_functions/getTasks';
import getWorkbook from '../../../gettingData/excelToJson/main_functions/getWorkbook';

const tasksSheet = getWorkbook('Tasks.xlsx', 0);


describe('Function "getTasks"', () => {
  const tasks = getTasks(tasksSheet);

  test('This function returns object', () => {
    expect(typeof tasks).toBe('object');
  });

  test('This function does not return array', () => {
    expect(Array.isArray(tasks)).toBeFalsy();
  }); 

  test('There tasks: "Presentation", "Game", "Course work" in returned object', () => {
    expect(tasks.Presentation).toBeTruthy();
    expect(tasks.Game).toBeTruthy();
    expect(tasks['Course work']).toBeTruthy();
  });
  
  test('Object "Game" has to have properties: "title", "link", "status"', () => {
    expect(tasks.Game).toHaveProperty('title');
    expect(tasks.Game).toHaveProperty('link');
    expect(tasks.Game).toHaveProperty('status');
  });

  test('Returned object has to have the property "listOfTasks"', () => {
    expect(tasks.listOfTasks).toBeTruthy();
  })

  test('Property "listOfTasks" has to have type "array" with 10 elements', () => {
    const { listOfTasks } = tasks;

    expect(Array.isArray(listOfTasks)).toBeTruthy();
    expect(tasks.listOfTasks).toHaveLength(10);
    
  });
});
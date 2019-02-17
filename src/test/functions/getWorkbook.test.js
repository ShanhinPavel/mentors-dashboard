import getWorkbook from '../../../gettingData/excelToJson/main_functions/getWorkbook';

const taskSheet = getWorkbook('Tasks.xlsx', 0);

describe('The function "getWorkbook"', () => {
  test('The function returns an array', () => {
    expect(Array.isArray(taskSheet)).toBeTruthy();
  });

  test('A returned array has to contain objects as elements', () => {
    expect(typeof taskSheet[0]).toBe('object');
    expect(typeof taskSheet[1]).toBe('object');
    expect(typeof taskSheet[2]).toBe('object');
    expect(typeof taskSheet[3]).toBe('object');
    expect(typeof taskSheet[4]).toBe('object');
  });
});

import { readFile, utils } from 'xlsx';
import { join } from 'path';
/*
  *This function takes filename, opens excel file,
  *each row with some data transforms into a json's object
  *which is placed to array of json's objects and then it is returned
*/
function getWorkbook(filename, sheetNumber) {
  // make path to file
  const pathToExelFile = join('./', 'gettingData', 'load_files', filename);
  // Read file xlsx
  const workbook = readFile(pathToExelFile);
  // Get sheet number 0
  const sheetName = workbook.SheetNames[sheetNumber];
  // Get worksheet number 0
  const worksheet = workbook.Sheets[sheetName];
  // Parse sheet to json
  const arrayOfJsonObjects = utils.sheet_to_json(worksheet, { raw: true });

  return arrayOfJsonObjects;
}

export default getWorkbook;

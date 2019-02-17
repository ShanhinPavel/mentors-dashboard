/*
*This function makes valid json
*It takes array of json objects and transforms it to array of js objects
*/
function editData(arrayOfJson) {
  const arrayOfValidJsonObjects = arrayOfJson.map((element) => {
    const stringifyingJson = JSON.stringify(element);
    const parsedJson = JSON.parse(stringifyingJson);

    return parsedJson;
  });
  return arrayOfValidJsonObjects;
}

export default editData;

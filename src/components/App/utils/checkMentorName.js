/*
*This function checks is mentor in mentor's collection.
*/
export default function checkMentor(inputText, collection) {
  let condition;
  let mentorName;

  if (inputText === null) {
    condition = false;
    mentorName = '';
  }
  mentorName = inputText.toLowerCase();
  condition = collection[mentorName];

  return { condition, mentorName };
}

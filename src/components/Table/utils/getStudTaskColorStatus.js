/*
  *This function check status of student task
   and return background of task cell
*/
const getStudTaskColorStatus = (studentTaskStatus, mark) => {
  const tasksStyle = {};

  if ((studentTaskStatus === 'Checked' || 'Checking') && mark > 0) {
    tasksStyle.background = 'green';
  }

  if (studentTaskStatus === 'Checking' && mark === 0) {
    tasksStyle.background = 'red';
  }

  if (studentTaskStatus === 'Checked' && mark === 0) {
    tasksStyle.backgroundColor = 'darkred';
  }

  switch (studentTaskStatus) {
    case 'checking':
      tasksStyle.backgroundColor = 'red';
      break;
    case 'In Progress':
      tasksStyle.backgroundColor = 'yellow';
      break;
    case 'ToDo':
      tasksStyle.backgroundColor = 'lightgray';
      break;
    default:
      break;
  }
  return tasksStyle;
};

export default getStudTaskColorStatus;

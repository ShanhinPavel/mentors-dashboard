/*
    *This function check status of task
     and return background of task cell
  */
const getTaskColorStatus = (taskStatus) => {
  const tasksStyle = {};

  switch (taskStatus) {
    case 'Checking':
      tasksStyle.backgroundColor = 'red';
      break;
    case 'ToDo':
      tasksStyle.backgroundColor = 'gray';
      break;
    case 'In Progress':
      tasksStyle.backgroundColor = 'yellow';
      break;
    case 'Checked':
      tasksStyle.backgroundColor = 'green';
      break;
    default:
      break;
  }

  return tasksStyle;
};

export default getTaskColorStatus;

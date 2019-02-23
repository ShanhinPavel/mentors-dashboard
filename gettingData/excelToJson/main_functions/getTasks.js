const Task = require('../classes/Task');
/*
  *This function takes sheet of tasks and returns collection of tasks
  If argumnet 'flag' is true we add additional properties to class Task
*/
function getTasks(sheetOfTasks, flag) {
  const tasksObjects = {
    listOfTasks: [],
  };
  // Add additional task to collection
  const linkToAdditionalTask = 'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/presentation.md';
  const additionalTask = new Task('Presentation', linkToAdditionalTask, 'Checked');
  tasksObjects.Presentation = additionalTask;

  sheetOfTasks.forEach((element) => {
    let titleOfTask = element.task;

    // Correct titles of tasks
    switch (titleOfTask) {
      case 'CodeJam "Scoreboard"':
        titleOfTask = 'Code Jam "Scoreboard"';
        break;
      case 'RS Activist - ':
        titleOfTask = 'RS Activist';
        break;
      default: titleOfTask = titleOfTask.trim();
        break;
    }

    const taskLink = element.link;
    const taskStatus = element.Status;

    tasksObjects.listOfTasks.push(titleOfTask); // add tasks to array

    if (titleOfTask === 'Code Jam "Scoreboard"') {
      tasksObjects.listOfTasks.push('Presentation');
    }

    if (flag) {
      tasksObjects[titleOfTask] = new Task(titleOfTask, taskLink, taskStatus);
      tasksObjects[titleOfTask].mark = 0;
      tasksObjects.Presentation.mark = 0;
      tasksObjects[titleOfTask].pullRequest = 'this task does not solved';
      tasksObjects.Presentation.pullRequest = 'this task does not solved';
    } else {
      tasksObjects[titleOfTask] = new Task(titleOfTask, taskLink, taskStatus);
    }
  });
  // Add link to "Course work"
  const courseWork = tasksObjects['Course work'];
  courseWork.link = 'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/rss-mentor-dashboard.md';

  return tasksObjects;
}

module.exports = getTasks;

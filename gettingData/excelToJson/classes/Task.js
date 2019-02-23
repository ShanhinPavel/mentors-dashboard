/*
  *Task class from which is prototype for tasks objects
*/
class Task {
  constructor(title, link, status) {
    this.title = title;
    this.link = link;
    this.status = status;
  }

  gettitle() {
    return this.title;
  }

  settitle(title) {
    this.title = title;
  }

  getlink() {
    return this.link;
  }

  setlink(link) {
    this.link = link;
  }

  getstatus() {
    return this.status;
  }

  setstatus(newStatus) {
    this.status = newStatus;
  }
}

module.exports = Task;

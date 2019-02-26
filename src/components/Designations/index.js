import React from 'react';
import Controller from './Controller';
import { markingTask, markingStudents } from './data/data';

/*
  *This function renders designations for the table mentor's table.
  It takes two object as parametres object of task marking and object of students task score
*/
function Designations() {
  return (
    <Controller markingTask={markingTask} markingStudents={markingStudents} />
  );
}

export default Designations;

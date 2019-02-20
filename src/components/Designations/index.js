import React from 'react';
import Controller from './Controller';
import { markingTask, markingStudents } from './data/data';

function Designations() {
  return (
    <Controller markingTask={markingTask} markingStudents={markingStudents} />
  );
}

export default Designations;

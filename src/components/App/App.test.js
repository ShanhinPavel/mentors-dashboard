/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import mentorStudent from '../../mentor-student.json';
import getMentorFromLocalstorage from '../../Utils/getMentorFromLocalstorage';

const mentorGithub = getMentorFromLocalstorage();

describe('Test rendering of an application', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App name={mentorGithub} data={mentorStudent} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

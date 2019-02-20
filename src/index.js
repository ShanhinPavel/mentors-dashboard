/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { unregister } from './serviceWorker';
import mentorStudent from './mentor-student.json';
import getMentorFromLocalstorage from './Utils/getMentorFromLocalstorage';

const mentorGithub = getMentorFromLocalstorage();

render(<App name={mentorGithub} data={mentorStudent} />, document.getElementById('root'));

unregister();

/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import View from './View';

describe('Table', () => {
  test('Should render "View" correctly in "debug" mode', () => {
    const component = shallow(<View debug />);
    expect(component).toMatchSnapshot();
  });
});

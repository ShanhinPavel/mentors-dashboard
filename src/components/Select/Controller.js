/* eslint-disable no-undef */
import React from 'react';
import { arrayOf, string, func } from 'prop-types';
import View from './View';
import compare from '../../Utils/compare';

/*
  *This function creates option elements from elements of collection
    and selects one(this one is pointed as second argument).
*/
const getOptions = (collection, selectedElement) => {
  const arrayFromCollection = collection // Copy array from arguments and sort
    .slice()
    .sort(compare);

  // Create element option from collection
  const options = arrayFromCollection.map((element, index) => {
    const id = index + 1;
    if (element === selectedElement) {
      return <option value={element} key={`option_${id}`} selected>{element}</option>;
    }
    return <option value={element} key={`option_${id}`}>{element}</option>;
  });
  return options;
};
/*
  *This function contains logic of Select component
*/
function Controller(props) {
  // This function takes selected option and changes state of main component
  const handleChange = (e) => {
    const github = e.target.value;
    localStorage.setItem('mentor-dashboard', JSON.stringify({ mentorGithub: github }));
    const { onChange } = props;
    onChange(github);
  };

  const { collection, selected } = props;
  const options = getOptions(collection, selected);

  return (
    <View onChange={handleChange} optionElements={options} />
  );
}

Controller.propTypes = {
  collection: arrayOf(string).isRequired,
  selected: string.isRequired,
  onChange: func.isRequired,
};

export default Controller;

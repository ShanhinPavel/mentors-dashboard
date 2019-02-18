import React from 'react';
import { arrayOf, node, func } from 'prop-types';
import { selectContainer, mentorP, select } from '../../styles/select';

function View(props) {
  const { onChange, optionElements } = props;

  return (
    <div style={selectContainer}>
      <p style={mentorP}>Mentor</p>
      <select id="great-names" onChange={onChange} style={select}>
        <option>
            Choose mentor
        </option>
        {optionElements}
      </select>
    </div>
  );
}

View.propTypes = {
  optionElements: arrayOf(node).isRequired,
  onChange: func.isRequired,
};

export default View;

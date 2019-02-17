import React from 'react';
import { arrayOf, string, instanceOf } from 'prop-types';
import Controller from './Controller';
import Table from '../Table';
import containerStyle from '../../styles/app';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newName) {
    this.setState({ name: newName });
  }

  render() {
    const { name } = this.state;
    const { data, tasks, mentors } = this.props;
    const mentor = mentors[name];

    return (
      <div style={containerStyle}>
        <Controller onChange={this.handleChange} selected={name} collection={data} />
        <Table tasks={tasks} mentorObject={mentor} selectedMentor={name} />
      </div>
    );
  }
}

Select.propTypes = {
  data: arrayOf(string).isRequired,
  name: string.isRequired,
  tasks: instanceOf(Object).isRequired,
  mentors: instanceOf(Object).isRequired,
};

export default Select;

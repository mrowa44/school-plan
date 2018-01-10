import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import ClassList from 'components/ClassList';

import styles from './MainScreen.scss';

class MainScreen extends React.Component {
  constructor() {
    super();
    const one = localStorage.getItem('groupOne');
    const two = localStorage.getItem('groupTwo');
    this.state = {
      groupOne: one ? { value: one, label: one } : null,
      groupTwo: two ? { value: two, label: two } : null,
    };
  }

  handleGroupOneChange = (option) => {
    this.setState({ groupOne: option });
    localStorage.setItem('groupOne', option.value);
  }

  handleGroupTwoChange = (option) => {
    this.setState({ groupTwo: option });
    localStorage.setItem('groupTwo', option.value);
  }

  render() {
    const { groupOne, groupTwo } = this.state;
    const valueOne = groupOne && groupOne.value;
    const valueTwo = groupTwo && groupTwo.value;
    const groups = this.props.data.map(item => ({
      label: item.group,
      value: item.group,
    }));

    return (
      <div className={styles.wrapper}>
        <div className={styles.dropdowns}>
          <Select
            name="group-one"
            value={valueOne}
            onChange={this.handleGroupOneChange}
            className={styles.dropdown}
            options={groups}
          />
          <Select
            name="group-two"
            value={valueTwo}
            onChange={this.handleGroupTwoChange}
            className={styles.dropdown}
            options={groups}
          />
        </div>
        <ClassList data={this.props.data} groupOne={valueOne} groupTwo={valueTwo} />
      </div>
    );
  }
}

MainScreen.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MainScreen;

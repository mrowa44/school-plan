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
    const three = localStorage.getItem('groupThree');
    this.state = {
      groupOne: { value: one, label: one },
      groupTwo: { value: two, label: two },
      groupThree: { value: three, label: three },
    };
  }

  handleGroupOneChange = (option) => {
    this.setState({ groupOne: option });
    localStorage.setItem('groupOne', option && option.value);
  }

  handleGroupTwoChange = (option) => {
    this.setState({ groupTwo: option });
    localStorage.setItem('groupTwo', option && option.value);
  }

  handleGroupThreeChange = (option) => {
    this.setState({ groupThree: option });
    localStorage.setItem('groupThree', option && option.value);
  }

  render() {
    const { groupOne, groupTwo, groupThree } = this.state;
    const valueOne = groupOne && groupOne.value;
    const valueTwo = groupTwo && groupTwo.value;
    const valueThree = groupThree && groupThree.value;
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
          <Select
            name="group-three"
            value={valueThree}
            onChange={this.handleGroupThreeChange}
            className={styles.dropdown}
            options={groups}
          />
        </div>
        <ClassList
          data={this.props.data}
          groupOne={valueOne}
          groupTwo={valueTwo}
          groupThree={valueThree}
        />
      </div>
    );
  }
}

MainScreen.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MainScreen;
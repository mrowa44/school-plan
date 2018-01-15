import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import uniqBy from 'lodash.uniqby';

import ClassList from 'components/ClassList';

import styles from './MainScreen.scss';

class MainScreen extends React.Component {
  constructor() {
    super();
    const one = localStorage.getItem('groupOne');
    const two = localStorage.getItem('groupTwo');
    const three = localStorage.getItem('groupThree');
    const four = localStorage.getItem('groupFour');
    this.state = {
      groupOne: { value: one, label: one },
      groupTwo: { value: two, label: two },
      groupThree: { value: three, label: three },
      groupFour: { value: four, label: four },
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

  handleGroupFourChange = (option) => {
    this.setState({ groupFour: option });
    localStorage.setItem('groupFour', option && option.value);
  }

  render() {
    const { groupOne, groupTwo, groupThree, groupFour } = this.state;
    const valueOne = groupOne && groupOne.value;
    const valueTwo = groupTwo && groupTwo.value;
    const valueThree = groupThree && groupThree.value;
    const valueFour = groupFour && groupFour.value;
    const { data } = this.props;
    const groups = data.reduce((prev, classesArr) => {
      const newGroups = classesArr.map(item => ({
        value: item.group,
        label: item.group,
      }));
      return [...prev, ...newGroups];
    }, []);
    const uniqGroups = uniqBy(groups, group => group.value);
    const sortedGroups = uniqGroups.sort(group => group.value);
    return (
      <div className={styles.wrapper}>
        <div className={styles.dropdowns}>
          <Select
            name="group-one"
            value={valueOne}
            onChange={this.handleGroupOneChange}
            className={styles.dropdown}
            options={sortedGroups}
          />
          <Select
            name="group-two"
            value={valueTwo}
            onChange={this.handleGroupTwoChange}
            className={styles.dropdown}
            options={sortedGroups}
          />
          <Select
            name="group-three"
            value={valueThree}
            onChange={this.handleGroupThreeChange}
            className={styles.dropdown}
            options={sortedGroups}
          />
          <Select
            name="group-four"
            value={valueFour}
            onChange={this.handleGroupFourChange}
            className={styles.dropdown}
            options={sortedGroups}
          />
        </div>
        <ClassList
          data={data}
          groupOne={valueOne}
          groupTwo={valueTwo}
          groupThree={valueThree}
          groupFour={valueFour}
        />
      </div>
    );
  }
}

MainScreen.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MainScreen;

import React from 'react';
import Select from 'react-select';

import ClassList from 'components/ClassList';

import styles from './MainScreen.scss';

class MainScreen extends React.Component {
  state = {
    groupOne: null,
    groupTwo: null,
  }

  handleGroupOneChange = (option) => {
    this.setState({ groupOne: option });
  }

  handleGroupTwoChange = (option) => {
    this.setState({ groupTwo: option });
  }

  render() {
    const { groupOne, groupTwo } = this.state;
    const valueOne = groupOne && groupOne.value;
    const valueTwo = groupTwo && groupTwo.value;
    const groups = this.props.data.map((item) => ({
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

export default MainScreen;

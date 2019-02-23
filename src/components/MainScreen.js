import React from 'react';
import PropTypes from 'prop-types';

import * as Storage from 'utils/localStorage';
import ClassList from 'components/ClassList';
import GroupsSection from 'components/GroupsSection';

import styles from './MainScreen.scss';

class MainScreen extends React.Component {
  state = {
    userGroups: Storage.getGroups(),
  }

  get allGroups() {
    return this.props.data.reduce((prev, classesArr) => {
      const groups = classesArr.map(item => item.group.trim());
      return [...new Set([...prev, ...groups])];
    }, []).sort();
  }

  handleTriggerUserGroups = () => {
    this.setState({ userGroups: Storage.getGroups() });
  }

  render() {
    const { userGroups } = this.state;
    const { data } = this.props;
    return (
      <div className={styles.wrapper}>
        <GroupsSection
          allGroups={this.allGroups}
          userGroups={userGroups}
          onUpdate={this.handleTriggerUserGroups}
        />
        <ClassList data={data} userGroups={userGroups} />
      </div>
    );
  }
}

MainScreen.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MainScreen;

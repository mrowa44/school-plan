import React from 'react';
import PropTypes from 'prop-types';

import * as Storage from 'utils/localStorage';
import ClassList from 'components/ClassList';
import GroupsList from 'components/GroupsList';
import Button from 'components/Button';

import styles from './MainScreen.scss';

class MainScreen extends React.Component {
  state = {
    userGroups: Storage.getGroups(),
    groupsSelectorShown: false,
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

  handleShowGroupsSelector = () => {
    this.setState(({ groupsSelectorShown }) => ({
      groupsSelectorShown: !groupsSelectorShown,
    }));
  }

  render() {
    const { userGroups, groupsSelectorShown } = this.state;
    const { data } = this.props;
    return (
      <div className={styles.wrapper}>
        <Button
          className={styles.changeGroupsBtn}
          onClick={this.handleShowGroupsSelector}
        >
          {groupsSelectorShown ? (
            <span>
              Hide groups list lol!
            </span>
          ) : (
            <span>
              Lemme change my groups lol!
            </span>
          )}
        </Button>
        {groupsSelectorShown && (
          <GroupsList
            allGroups={this.allGroups}
            userGroups={userGroups}
            onGroupsUpdate={this.handleTriggerUserGroups}
          />
        )}
        <ClassList data={data} userGroups={userGroups} />
      </div>
    );
  }
}

MainScreen.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MainScreen;

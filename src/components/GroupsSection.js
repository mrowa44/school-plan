import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { formatGroupName } from 'utils/helpers';
import Button from 'components/Button';
import GroupsList from 'components/GroupsList';
import styles from './GroupsSection.scss';

class GroupsSection extends React.Component {
  state = {
    groupsSelectorShown: false,
  }

  handleShowGroupsSelector = () => {
    this.setState(({ groupsSelectorShown }) => ({
      groupsSelectorShown: !groupsSelectorShown,
    }));
  }

  render() {
    const { groupsSelectorShown } = this.state;
    const { userGroups, isFreshDataFetched } = this.props;
    const currentGroups = userGroups.map(g => formatGroupName(g));
    return (
      <div className={styles.section}>
        <div className={styles.top}>
          <div className={styles.groups}>
            Grupy:
            <ul className={styles.list}>
              {currentGroups.map(group => (
                <li key={group} className={styles.group}>
                  {group}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.topRight}>
            <div className={cx(styles.statusDot, {
              [styles.statusDotGreen]: isFreshDataFetched,
            })}
            />
            <Button
              className={styles.changeGroupsBtn}
              onClick={this.handleShowGroupsSelector}
            >
              {groupsSelectorShown ? (
                <span>
                  Zamknij xD
                </span>
              ) : (
                <span>
                  Wybór grup
                </span>
              )}
            </Button>
          </div>
        </div>
        {groupsSelectorShown && (
          <GroupsList
            allGroups={this.props.allGroups}
            userGroups={userGroups}
            onGroupsUpdate={this.props.onUpdate}
          />
        )}
      </div>
    );
  }
}

GroupsSection.propTypes = {
  allGroups: PropTypes.array.isRequired,
  isFreshDataFetched: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  userGroups: PropTypes.array.isRequired,
};

export default GroupsSection;

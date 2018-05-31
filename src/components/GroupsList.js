import React from 'react';
import PropTypes from 'prop-types';

import * as Storage from 'utils/localStorage';
import { formatGroupName } from 'utils/helpers';
import Checkbox from 'components/Checkbox';
import styles from './GroupsList.scss';

class GroupsList extends React.Component {
  handleChange = (name, checked) => {
    if (checked) {
      Storage.addGroup(name);
    } else {
      Storage.removeGroup(name);
    }
    this.props.onGroupsUpdate();
  }

  isSaved(name) {
    const { userGroups } = this.props;
    return userGroups.includes(name);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.allGroups.map(name => (
          <div key={name} className={styles.item}>
            <Checkbox
              name={name}
              displayName={formatGroupName(name)}
              checked={this.isSaved(name)}
              onChange={this.handleChange}
            />
          </div>
        ))}
      </div>
    );
  }
}

GroupsList.propTypes = {
  allGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGroupsUpdate: PropTypes.func.isRequired,
  userGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GroupsList;

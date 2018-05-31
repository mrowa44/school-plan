import React from 'react';
import PropTypes from 'prop-types';

import ClassDay from 'components/ClassDay';

import styles from './ClassList.scss';

class ClassList extends React.Component {
  render() {
    const { data, userGroups } = this.props;

    return (
      <div className={styles.tableWrapper}>
        <div className={styles.table}>
          {data.map(day => (
            <ClassDay classes={day} key={day[0].id} userGroups={userGroups} />
          ))}
        </div>
      </div>
    );
  }
}

ClassList.propTypes = {
  data: PropTypes.array.isRequired,
  userGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ClassList;

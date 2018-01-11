import React from 'react';
import PropTypes from 'prop-types';

import ClassListItem from 'components/ClassListItem';

import styles from './ClassList.scss';

class ClassList extends React.Component {
  render() {
    const { groupOne, groupTwo, groupThree, data } = this.props;
    const classes = data.filter((item) => {
      const group = item.group;
      return group === groupOne || group === groupTwo || group === groupThree;
    });

    return (
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeading}>
            <th>Time</th>
            <th>Subject</th>
            <th>Group</th>
            <th>Lecturer</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {classes.map(item => <ClassListItem {...item} />)}
        </tbody>
      </table>
    );
  }
}

ClassList.propTypes = {
  groupOne: PropTypes.string,
  groupTwo: PropTypes.string,
  groupThree: PropTypes.string,
  data: PropTypes.array.isRequired,
};

ClassList.defaultProps = {
  groupOne: '',
  groupTwo: '',
  groupThree: '',
};

export default ClassList;

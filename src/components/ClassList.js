import React from 'react';

import ClassListItem from 'components/ClassListItem';

import styles from './ClassList.scss';

class ClassList extends React.Component {
  render() {
    const { groupOne, groupTwo, data } = this.props;
    const classes = data.filter((item) => {
      return item.group === groupOne || item.group === groupTwo;
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

export default ClassList;

import React from 'react';
import PropTypes from 'prop-types';

import ClassDay from 'components/ClassDay';

import styles from './ClassList.scss';

class ClassList extends React.Component {
  render() {
    const { data, ...groups } = this.props;

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
          {data.map(day => <ClassDay classes={day} key={day[0].id} {...groups} />)}
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

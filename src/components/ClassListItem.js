import React from 'react';
import PropTypes from 'prop-types';

import styles from './ClassListItem.scss';

class ClassListItem extends React.Component {
  formatGroupName() {
    return this.props.group.replace(/Lekarski\/16\//, '');
  }

  formatLecturer() {
    const name = this.props.lecturer.trim().split(' ');
    return name[name.length - 1];
  }

  formatPlace() {
    return this.props.place.replace(/bud\./, '');
  }
  render() {
    const {
      duration,
      endDate,
      startDate,
      subject,
      date,
    } = this.props;
    return (
      <tr className={styles.row}>
        <td className={styles.item}>
          {date}<br />
          {startDate}-{endDate} ({duration})
        </td>
        <td className={styles.item}>
          <div>{subject}</div>
        </td>
        <td className={styles.item}>
          <div>{this.formatGroupName()}</div>
        </td>
        <td className={styles.item}>
          <div>{this.formatLecturer()}</div>
        </td>
        <td className={styles.item}>
          <div>{this.formatPlace()}</div>
        </td>
      </tr>
    );
  }
}

ClassListItem.propTypes = {
  duration: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  lecturer: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

export default ClassListItem;

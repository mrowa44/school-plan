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
    } = this.props;
    return (
      <div className={styles.item}>
        <div className={styles.row}>
          <div className={styles.time}>{startDate} - {endDate}</div>
          <div className={styles.subject}>{subject}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoRow}>
            <div>📍 Place:</div>
            <div>{this.formatPlace()}</div>
          </div>
          <div className={styles.infoRow}>
            <div>👥 Group:</div>
            <div>{this.formatGroupName()}</div>
          </div>
          <div className={styles.infoRow}>
            <div>🗣 Lecturer:</div>
            <div>{this.formatLecturer()}</div>
          </div>
          <div className={styles.infoRow}>
            <div>⏳ Duration:</div>
            <div>{duration}</div>
          </div>
        </div>
      </div>
    );
  }
}

ClassListItem.propTypes = {
  duration: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  lecturer: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

export default ClassListItem;

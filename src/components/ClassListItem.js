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
            📍 {this.formatPlace()}
          </div>
          <div className={styles.infoRow}>
            👥 {this.formatGroupName()}
          </div>
          <div className={styles.infoRow}>
            🗣 {this.formatLecturer()}
          </div>
          <div className={styles.infoRow}>
            ⏳ {duration}
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

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { formatGroupName } from 'utils/helpers';
import styles from './ClassListItem.scss';

class ClassListItem extends React.Component {
  get place() {
    return this.props.place.replace(/bud\./, '').trim();
  }

  formatGroupName() {
    return formatGroupName(this.props.group);
  }

  formatLecturer() {
    const name = this.props.lecturer.trim().split(' ');
    return name[name.length - 1];
  }

  render() {
    const {
      duration,
      endDate,
      startDate,
      subject,
      isExam,
      comments,
    } = this.props;
    const className = cx(styles.item, {
      [styles.itemExam]: isExam,
    });
    const classHours = duration[0];
    const classMinutes = Number(duration.split('h')[1].replace('m', ''));
    const classMinutesNum = classMinutes > 0 ? ` ${classMinutes}` : '';
    const displayTime = `${classHours}h${classMinutesNum}`;

    return (
      <div className={className}>
        <div
          className={styles.timeBox}
          style={{
            height: `${70 + (40 * classHours)}px`,
          }}
        >
          <div>{startDate}</div>
          <div>{endDate}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.subject}>
            {subject} ({displayTime}) {isExam ? ' - Egazmin xD' : ''}
          </div>
          {this.place && (
            <div className={styles.place}>
              {this.place}
            </div>
          )}
          <div className={styles.group}>
            {this.formatGroupName()}
          </div>
          <div className={styles.lecturer}>
            {this.formatLecturer()}
          </div>
          <div className={styles.comment}>
            {comments}
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
  isExam: PropTypes.bool.isRequired,
  lecturer: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

export default ClassListItem;

import React from 'react';

import styles from './ClassListItem.scss';

class ClassListItem extends React.Component {
  formatGroupName() {
    const name = this.props.group.replace(/Lekarski\/16\//, '');
    return name;
  }

  formatLecturer() {
    const name = this.props.lecturer.trim().split(' ');
    const last = name[name.length - 1];
    return last;
  }

  formatPlace() {
    const name = this.props.place.replace(/bud\./, '');
    return name;
  }
  render() {
    const {
      comments,
      duration,
      endDate,
      form,
      group,
      lecturer,
      passing,
      place,
      startDate,
      subject,
    } = this.props;
    return (
      <tr className={styles.row}>
        <td className={styles.item}>
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

export default ClassListItem;

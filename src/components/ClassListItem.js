import React from 'react';

import styles from './ClassListItem.scss';

class ClassListItem extends React.Component {
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
          <div>{startDate}</div>
        </td>
        <td className={styles.item}>
          <div>{endDate}</div>
        </td>
        <td className={styles.item}>
          <div>{duration}</div>
        </td>
        <td className={styles.item}>
          <div>{subject}</div>
        </td>
        <td className={styles.item}>
          <div>{form}</div>
        </td>
        <td className={styles.item}>
          <div>{group}</div>
        </td>
        <td className={styles.item}>
          <div>{lecturer}</div>
        </td>
        <td className={styles.item}>
          <div>{passing}</div>
        </td>
        <td className={styles.item}>
          <div>{place}</div>
        </td>
        <td className={styles.item}>
          <div>{comments}</div>
        </td>
      </tr>
    );
  }
}

export default ClassListItem;

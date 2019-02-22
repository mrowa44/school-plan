import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ClassListItem from 'components/ClassListItem';

import styles from './ClassDay.scss';

function ClassDay({
  classes,
  userGroups,
}) {
  const filtered = classes.filter(item => userGroups.includes(item.group.trim()));

  if (filtered.length === 0) { return null; }

  const { date } = filtered[0];
  const strippedDate = date.split(' ')[0];
  const prettyDate = moment(strippedDate, 'YYYY-MM-DD dddd').format('dddd D.MM.YY');

  return (
    <div className={styles.classDay}>
      <div className={styles.date}>{prettyDate}</div>
      <div>
        {filtered.map(item => <ClassListItem {...item} key={item.id} />)}
      </div>
    </div>
  );
}

ClassDay.propTypes = {
  classes: PropTypes.array.isRequired,
  userGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ClassDay;

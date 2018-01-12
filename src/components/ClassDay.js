import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ClassListItem from 'components/ClassListItem';

import styles from './ClassDay.scss';

function ClassDay({ classes, groupOne, groupTwo, groupThree }) {
  const filtered = classes.filter((item) => {
    const group = item && item.group;
    return group === groupOne || group === groupTwo || group === groupThree;
  });

  if (filtered.length === 0) { return null; }

  const date = filtered[0].date;
  const prettyDate = moment(date, 'YYYY-MM-DD dddd').format('dddd D.MM.YY');

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
  groupOne: PropTypes.string,
  groupTwo: PropTypes.string,
  groupThree: PropTypes.string,
};

ClassDay.defaultProps = {
  groupOne: null,
  groupTwo: null,
  groupThree: null,
};

export default ClassDay;

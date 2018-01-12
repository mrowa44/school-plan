import React from 'react';
import PropTypes from 'prop-types';

import ClassDay from 'components/ClassDay';

import styles from './ClassList.scss';

class ClassList extends React.Component {
  render() {
    const { data, ...groups } = this.props;

    return (
      <div className={styles.tableWrapper}>
        <div className={styles.table}>
          {data.map(day => <ClassDay classes={day} key={day[0].id} {...groups} />)}
        </div>
      </div>
    );
  }
}

ClassList.propTypes = {
  groupOne: PropTypes.string,
  groupTwo: PropTypes.string,
  groupThree: PropTypes.string,
  groupFour: PropTypes.string,
  data: PropTypes.array.isRequired,
};

ClassList.defaultProps = {
  groupOne: '',
  groupTwo: '',
  groupThree: '',
  groupFour: '',
};

export default ClassList;

import React from 'react';

import spinner from 'shared/spinner.svg';
import styles from './Spinner.scss';

function Spinner() {
  return (
    <img src={spinner} alt="" className={styles.spinner} />
  );
}

export default Spinner;

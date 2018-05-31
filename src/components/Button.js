import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Button.scss';

function Button({ className, ...props }) {
  const btnClass = cx(styles.button, className);
  return (
    <button {...props} className={btnClass} />
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  className: '',
  type: 'button',
};

export default Button;

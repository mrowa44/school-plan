import React from 'react';
import PropTypes from 'prop-types';

import styles from './Checkbox.scss';

class Checkbox extends React.Component {
  handleChange = () => {
    const { onChange, name, checked } = this.props;
    onChange(name, !checked);
  }

  render() {
    const { name, displayName, checked } = this.props;
    return (
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          onChange={this.handleChange}
          checked={checked}
        />
        <span className={styles.label}>
          {displayName}
        </span>
      </label>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  displayName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;

/* eslint no-unused-vars: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'helpers/classnames';

const FontAwesomeIcon = ({
  icon, iconSize,
}) => {
  const FontAwesomeIconClass = classnames({
    // [] -> computed property name in ES6, basically it will expand the value within that variable
    // and make that as the object key
    [icon]: true,
    [iconSize]: true,
  });

  return (
    <i className={FontAwesomeIconClass} />
  );
};

FontAwesomeIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  iconSize: PropTypes.string.isRequired,
};

export default FontAwesomeIcon;

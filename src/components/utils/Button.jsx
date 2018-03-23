import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'helpers/classnames';

const Button = ({ children, onClick, color }) => {
  const buttonClassNames = classnames({
    button: true,
  });

  return (
    <div
      className={buttonClassNames}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={onClick}
      style={color !== 'default' ? { backgroundColor: color } : {}}
    >
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;

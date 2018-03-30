import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'helpers/classnames';

const Button = ({
  children, onClick, color,
}) => {
  const buttonClassNames = classnames({
    Button: true,
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
      {React.cloneElement(children, { test: 'tessst' })}
    </div>
  );
};

Button.defaultProps = {
  color: 'default',
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default Button;

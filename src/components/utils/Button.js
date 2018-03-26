import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'helpers/classnames';

const Button = ({
  children, onClick, color, id,
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
      id={id}
    >
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Button.defaultProps = {
  id: '',
};

export default Button;

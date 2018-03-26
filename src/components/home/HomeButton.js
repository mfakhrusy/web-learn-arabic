import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/utils/Button';

const HomeButton = ({
  onClick, color, type, children, id,
}) => (
  <div className="HomeButton">
    <Button
      onClick={onClick}
      color={color}
      type={type}
      id={id}
    >
      {children}
    </Button>
  </div>
);

HomeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
};

export default HomeButton;

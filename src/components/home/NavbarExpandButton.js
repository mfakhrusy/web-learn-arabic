import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/utils/Button';

const NavbarExpandButton = ({
  onClick, color, type, children,
}) => (
  <div className="NavbarExpandButton">
    <Button
      onClick={onClick}
      color={color}
      type={type}
    >
      {children}
    </Button>
  </div>
);

NavbarExpandButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default NavbarExpandButton;

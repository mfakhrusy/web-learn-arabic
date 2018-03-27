import React from 'react';
import PropTypes from 'prop-types';

const LevelItem = ({ children, id }) => (
  <div className="LevelItem" id={id}>
    {children}
  </div>
);

LevelItem.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
};

export default LevelItem;

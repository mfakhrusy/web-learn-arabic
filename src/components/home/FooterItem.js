import React from 'react';
import PropTypes from 'prop-types';

const FooterItem = ({ listItems, label }) => (
  <div className="FooterItem">
    <h3>{label}</h3>
    <ul>
      {listItems.map((listItem, index) => (
        <li key={index.toString()}>{listItem}</li>
      ))}
    </ul>

  </div>
);

FooterItem.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
};

export default FooterItem;

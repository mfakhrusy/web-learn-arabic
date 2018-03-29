import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FooterItem from 'components/home/FooterItem';
import HomeButton from 'components/home/HomeButton';

const listItemsAbout = ['About 1', 'About 2', 'About 3'];
const listItemsSocial = ['Social 1', 'Social 2', 'Social 3'];
const listItemsTerm = ['Term 1', 'Term 2', 'Term 3'];

const HomeFooter = ({ history }) => (
  <section className="HomeFooter">
    <div id="HomeFooter-grid-item-1">
      <p>Footer Here</p>
    </div>
    <div id="HomeFooter-grid-item-2">
      <HomeButton
        onClick={() => { history.push('/level'); }}
        type="normal"
        color="#abcabc"
      >
        <p>Get Started</p>
      </HomeButton>
    </div>
    <div id="HomeFooter-grid-item-3">
      <FooterItem listItems={listItemsAbout} label="About" />
      <FooterItem listItems={listItemsSocial} label="Social" />
      <FooterItem listItems={listItemsTerm} label="Term" />
    </div>
  </section>
);

HomeFooter.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HomeFooter);

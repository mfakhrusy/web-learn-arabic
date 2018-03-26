import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeButton from 'components/home/HomeButton';

const HomeIntroduction = ({ history }) => (
  <div className="HomeIntroduction">
    <h1>HomeIntroduction</h1>
    <HomeButton
      onClick={() => { history.push('/level'); }}
      type="normal"
      color="#abcabc"
    >
      <p>Get Started</p>
    </HomeButton>
  </div>
);

HomeIntroduction.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HomeIntroduction);

import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeButton from 'components/home/HomeButton';

const HomeIntroduction = ({ history }) => (
  <div className="HomeIntroduction">
    <div id="HomeIntroduction-grid-item-1">
      <h1>Learn Arabic for Non-Arab Speaker. Free!</h1>
    </div>
    <div id="HomeIntroduction-grid-item-2">
      <img src="https://s25.postimg.org/gikpymhjj/light_new_compressed.png" alt="lamp" />
    </div>
    <div id="HomeIntroduction-grid-item-3">
      <HomeButton
        onClick={() => { history.push('/level'); }}
        type="normal"
        color="#abcabc"
      >
        <p>Get Started</p>
      </HomeButton>
    </div>
  </div>
);

HomeIntroduction.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HomeIntroduction);

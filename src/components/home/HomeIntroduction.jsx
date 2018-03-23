/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/utils/Button';

const HomeIntroduction = ({ history }) => (
  <div className="home-introduction">
    <h1>Arab Language Learning Platform for English Speaker. Learn Now!</h1>
    <Button
      onClick={() => { history.push('/level'); }}
      type="normal"
      color="#abcbac"
    >
      <p>Get Started</p>
    </Button>
  </div>
);

HomeIntroduction.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HomeIntroduction);

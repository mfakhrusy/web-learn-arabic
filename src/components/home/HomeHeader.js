import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeIntroduction from 'components/home/HomeIntroduction';
import HomeLevelSelection from 'components/home/HomeLevelSelection';

const HomeHeader = () => (
  <div className="HomeHeader">
    <Switch>
      <Route exact path="/" component={HomeIntroduction} />
      <Route path="/level" component={HomeLevelSelection} />
    </Switch>
  </div>
);

export default HomeHeader;

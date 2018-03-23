import React from 'react';
import HomeDescription from './HomeDescription';
import HomeIntroduction from './HomeIntroduction';
import HomeFooter from './HomeFooter';
import NavigationBar from './NavigationBar';

const Home = () => (
  <div className="home-wrapper">
    <NavigationBar />
    <HomeIntroduction />
    <HomeDescription />
    <HomeFooter />
  </div>
);

export default Home;

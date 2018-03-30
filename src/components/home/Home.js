import React from 'react';
import NavigationBar from 'components/home/NavigationBar';
import HomeHeader from 'components/home/HomeHeader';
import HomeDescription from 'components/home/HomeDescription';
import HomeFooter from 'components/home/HomeFooter';

const Home = () => (
  <div className="Home">
    <NavigationBar />
    <HomeHeader />
    <HomeDescription />
    <HomeFooter />
  </div>
);

export default Home;

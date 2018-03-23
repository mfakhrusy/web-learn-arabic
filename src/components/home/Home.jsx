import React from 'react';
import HomeDescription from 'components/home/HomeDescription';
import HomeHeader from 'components/home/HomeHeader';
import HomeFooter from 'components/home/HomeFooter';
// import NavigationBar from './NavigationBar';

const Home = () => (
  <div className="home-wrapper">
    {/* <NavigationBar /> */}
    <HomeHeader />
    <HomeDescription />
    <HomeFooter />
  </div>
);

export default Home;

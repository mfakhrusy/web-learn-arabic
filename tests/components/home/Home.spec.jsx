import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../../../src/components/home/Home';
import HomeDescription from '../../../src/components/home/HomeDescription';
import HomeIntroduction from '../../../src/components/home/HomeIntroduction';
import HomeFooter from '../../../src/components/home/HomeFooter';
import NavigationBar from '../../../src/components/home/NavigationBar';

describe('<Home />', () => {
  const wrapper = shallow(<Home />);
  it('should have a home-wrapper class', () => {
    expect(wrapper.find('.home-wrapper')).to.have.length(1);
  });

  it('should have a HomeDescription, HomeIntroduction, HomeFooter, and NavigationBar child element', () => {
    expect(wrapper.containsAllMatchingElements([
      <HomeIntroduction />,
      <HomeDescription />,
      <HomeFooter />,
      <NavigationBar />,
    ])).to.equal(true);
  });
});

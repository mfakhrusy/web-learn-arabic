import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../../src/components/App';
import Home from '../../src/components/home/Home';

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('should have a wrapper class', () => {
    expect(wrapper.find('.wrapper')).to.have.length(1);
  });
  it('should have a <Home /> child element', () => {
    expect(wrapper.contains(<Home />)).to.equal(true);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Home from 'components/home/Home';
import HomeHeader from 'components/home/HomeHeader';

describe('<Home />', () => {
  const wrapper = shallow(<Home />);

  it('<Home /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have an Home class', () => {
    expect(wrapper.find('.Home')).to.have.length(1);
  });

  it('should have a <HomeHeader /> child', () => {
    expect(wrapper.contains(<HomeHeader />)).to.equal(true);
  });
});

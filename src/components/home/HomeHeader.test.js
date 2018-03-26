import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HomeHeader from 'components/home/HomeHeader';
import HomeIntroduction from 'components/home/HomeIntroduction';
import HomeLevelSelection from 'components/home/HomeLevelSelection';

describe('<HomeHeader />', () => {
  const wrapper = shallow(<HomeHeader />);

  it('<HomeHeader /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <HomeHeader />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have an HomeHeader class', () => {
    expect(wrapper.find('.HomeHeader')).to.have.length(1);
  });

  it('should have a <Switch /> child', () => {
    expect(wrapper.find(Switch)).to.have.length(1);
  });

  it('should have two <Route>', () => {
    expect(wrapper.find(Switch)).to.have.length(1);
  });

  it('should have two <Route> to <HomeIntroduction /> and <HomeLevelSelection />', () => {
    expect(wrapper.contains([
      <Route exact path="/" component={HomeIntroduction} />,
      <Route path="/level" component={HomeLevelSelection} />,
    ])).to.equal(true);
  });
});

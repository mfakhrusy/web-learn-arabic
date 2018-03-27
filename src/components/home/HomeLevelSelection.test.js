import React from 'react';
import ReactDOM from 'react-dom';
// import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HomeLevelSelection from 'components/home/HomeLevelSelection';

describe('<Home />', () => {
  const wrapper = shallow(<HomeLevelSelection />);

  it('<Home /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <HomeLevelSelection />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have an HomeLevelSelection class', () => {
    expect(wrapper.find('.HomeLevelSelection')).to.have.length(1);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'; // so the test on App will success
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from 'components/App';
import Home from 'components/home/Home';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have an App class', () => {
    expect(wrapper.find('.App')).to.have.length(1);
  });

  it('should have a <Home /> child', () => {
    expect(wrapper.contains(<Home />)).to.equal(true);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from 'components/App';
import Home from 'components/home/Home';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have an App class', () => {
    expect(wrapper.find('.App')).to.have.length(1);
  });

  it('should have a <Home /> child', () => {
    expect(wrapper.contains(<Home />)).to.equal(true);
  });
});

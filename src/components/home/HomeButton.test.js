/* eslint function-paren-newline: ["error", "consistent"] */
import React from 'react';
// import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import HomeButton from 'components/home/HomeButton';

describe('<HomeButton />', () => {
  const wrapper = mount(
    <HomeButton
      onClick={sinon.spy()}
      type="normal"
      color="#ffffff"
    >
      <p>test</p>
    </HomeButton>,
  );

  // div always rendered
  it('always render a div', () => {
    expect(wrapper.find('div')).to.have.length.greaterThan(0);
  });

  it('should have an HomeButton class', () => {
    expect(wrapper.find('.HomeButton')).to.have.length(1);
  });
});

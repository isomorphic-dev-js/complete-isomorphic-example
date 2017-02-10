import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import App from '../../src/components/app';

describe('App Component', () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = shallow(<App />);
  });

  afterEach(() => {
    wrappedComponent = null;
  });

  it('Uses Link Components', () => {
    expect(wrappedComponent.find(Link).length).to.eq(3);
  });

  it('Links to /products, /cart and /profile pages', () => {
    expect(wrappedComponent.find({ to: '/products' }).length).to.eq(1);
    expect(wrappedComponent.find({ to: '/cart' }).length).to.eq(1);
    expect(wrappedComponent.find({ to: '/profile' }).length).to.eq(1);
  });
});

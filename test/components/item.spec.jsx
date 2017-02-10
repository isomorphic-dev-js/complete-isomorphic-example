import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Item from '../../src/components/item';

describe('Item Component', () => {
  let testComponent;
  let props;

  beforeEach(() => {
    props = {
      thumbnail: 'http://image.png',
      name: 'Test Name',
      price: 10
    };
    testComponent = shallow(<Item {...props} />);
  });

  afterEach(() => {
    testComponent = null;
    props = null;
  });

  it('Displays a thumbnail based on its props', () => {
    expect(testComponent.find({ src: props.thumbnail }).length).to.eq(1);
  });

  it('Displays a name based on its props', () => {
    expect(testComponent.find('.middle.aligned.content').text()).to.eq(props.name);
  });

  it('Displays a price based on its props', () => {
    expect(testComponent.find('.right.aligned.content').text()).to.eq(`$${props.price}`);
  });
});

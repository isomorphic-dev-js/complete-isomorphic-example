import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { CartComponent } from '../../src/components/cart';

describe('Cart Component', () => {
  let testComponent;
  let props;

  beforeEach(() => {
    props = {
      items: [
        {
          thumbnail: 'http://image.png',
          name: 'Test Name',
          price: 10
        }
      ],
      history: {
        push: sinon.spy()
      }
    };
    testComponent = shallow(<CartComponent {...props} />);
  });

  afterEach(() => {
    testComponent = null;
    props = null;
  });

  it('When checkout is clicked, the router push method is triggered', () => {
    testComponent.find('.button').simulate('click');
    expect(props.history.push.called).to.be.true;
    expect(props.history.push.calledWith('/cart/payment')).to.be.true;
  });
});

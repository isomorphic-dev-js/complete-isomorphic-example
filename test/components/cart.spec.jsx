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
      router: {
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
    expect(props.router.push.called).to.be.truthy;
    expect(props.router.push.calledWith('/cart/payment')).to.be.truthy;
  });
});

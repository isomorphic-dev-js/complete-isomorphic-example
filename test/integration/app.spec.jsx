import { Provider } from 'react-redux';
import React from 'react';
import { Router, createMemoryHistory } from 'react-router';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { routes } from '../../src/shared/sharedRoutes';

describe('App Component', () => {
  it('Uses Link Components', () => {
    const store = {
      getState: () => {
        return {
          products: [],
          search: {}
        }
      },
      subscribe: () => {},
      dispatch: () => {}
    }
    const renderedComponent = mount(
      <Provider store={store}>
        <Router
          routes={routes()}
          history={createMemoryHistory('/products')}
        />
      </Provider>);
    expect(renderedComponent.find('.search').length).to.be.above(1);
  });
});

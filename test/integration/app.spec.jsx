  import React from 'react';
  import { Router, createMemoryHistory } from 'react-router';
  import { expect } from 'chai';
  import { mount } from 'enzyme';
  import { routes } from '../../src/shared/sharedRoutes';

  describe('App Component', () => {
    it('Uses Link Components', () => {
      const renderedComponent = mount(
        <Router
          routes={routes()}
          history={createMemoryHistory('/products')}
        />);
      expect(renderedComponent.find('.search').length).to.be.above(1);
    });
  });

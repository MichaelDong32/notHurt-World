import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import App from '../client/components/app';

test('<App /> has a div', (t) => {
  const wrapper = shallow(<App />);
  t.equal(wrapper.is('div'), true);
  t.end();
});

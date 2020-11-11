import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import HelloWorld from './HelloWorld';

configure({ adapter: new Adapter() });

test('should render Sample component correctly', () => {
  const wrapper = mount(<HelloWorld description="Some Description" />);
  expect(wrapper.find('#welcome').text()).toBe('Welcome to SharePoint!');
});

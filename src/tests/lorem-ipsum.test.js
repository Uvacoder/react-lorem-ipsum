import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoremIpsum from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Lorem Ipsum', () => {
  test('exists without data', () => {
    const wrapper = shallow(<LoremIpsum />);

    expect(wrapper.exists()).toBe(true);
  });
  test('exists with data', () => {
    const wrapper = shallow(<LoremIpsum p={5} />);
    expect(wrapper.exists()).toBe(true);
  });
});

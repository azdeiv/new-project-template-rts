import * as React from 'react';
import {shallow} from 'enzyme';
import App from '../components/App/App';

describe('Display', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />));
  });

  it('displays "Hello World"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toEqual('Hello World');
  });
});

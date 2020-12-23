import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchMoviesField from '../SearchMoviesField/SearchMoviesField';
import { SelectedMovie } from './SelectedMovie';

configure({ adapter: new Adapter() });

describe('<SelectedMovie />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SelectedMovie />);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });
});

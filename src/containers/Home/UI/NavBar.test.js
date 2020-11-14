import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchMoviesField from '../SearchMoviesField/SearchMoviesField';
import { NavBar } from './NavBar';

configure({ adapter: new Adapter() });

describe('<NavBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it("shouldn't render search movie field if no selected movie", () => {
    expect(wrapper.find(SearchMoviesField)).toHaveLength(0);
  });

  it('should render search movie field if movie selected', () => {
    wrapper.setProps({ selectedMovie: true });
    expect(wrapper.find(SearchMoviesField)).toHaveLength(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import SearchForm from '../components/SearchForm';


describe('<SearchForm />', () => {
    it('renders <SearchForm /> components', () => {
        shallow(<SearchForm />);
    });
});

chai.use(chaiEnzyme());
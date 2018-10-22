import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Header from '../components/Header';


describe('<Header />', () => {
    it('renders <Header /> components', () => {
        shallow(<Header />);
    });
});

chai.use(chaiEnzyme());
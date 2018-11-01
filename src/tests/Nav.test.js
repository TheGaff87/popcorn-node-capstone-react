import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import {Nav} from '../components/Nav';


describe('<Nav />', () => {
    it('renders <Nav /> components', () => {
        shallow(<Nav />);
    });
});

chai.use(chaiEnzyme());
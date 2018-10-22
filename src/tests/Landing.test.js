import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Landing from '../components/Landing';


describe('<Landing />', () => {
    it('renders <Landing /> components', () => {
        shallow(<Landing />);
    });
});

chai.use(chaiEnzyme());
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Welcome from '../components/Welcome';


describe('<Welcome />', () => {
    it('renders <Welcome /> components', () => {
        shallow(<Welcome />);
    });
});

chai.use(chaiEnzyme());
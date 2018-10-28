import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Videos from '../components/Videos';


describe('<Videos />', () => {
    it('renders <Videos /> components', () => {
        shallow(<Videos />);
    });
});

chai.use(chaiEnzyme());
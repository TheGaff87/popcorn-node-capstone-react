import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import InfoDetail from '../components/InfoDetail';


describe('<InfoDetail />', () => {
    it('renders <InfoDetail /> components', () => {
        shallow(<InfoDetail />);
    });
});

chai.use(chaiEnzyme());
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import InfoBene from '../components/InfoBene';


describe('<InfoBene />', () => {
    it('renders <InfoBene /> components', () => {
        shallow(<InfoBene />);
    });
});

chai.use(chaiEnzyme());
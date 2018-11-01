import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import {SignupForm} from '../components/SignupForm';


describe('<SignupForm />', () => {
    it('renders <SignupForm /> components', () => {
        shallow(<SignupForm />);
    });
});

chai.use(chaiEnzyme());
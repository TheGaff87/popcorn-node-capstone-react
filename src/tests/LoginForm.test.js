import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import {LoginForm} from '../components/LoginForm';


describe('<LoginForm />', () => {
    it('renders <LoginForm /> components', () => {
        shallow(<LoginForm />);
    });
});

chai.use(chaiEnzyme());
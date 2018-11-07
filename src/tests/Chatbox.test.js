import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Chatbox from '../components/Chatbox';


describe('<Chatbox />', () => {
    it('renders <Chatbox /> components', () => {
        shallow(<Chatbox />);
    });
});

chai.use(chaiEnzyme());
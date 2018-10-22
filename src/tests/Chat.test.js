import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Chat from '../components/Chat';


describe('<Chat />', () => {
    it('renders <Chat /> components', () => {
        shallow(<Chat />);
    });
});

chai.use(chaiEnzyme());
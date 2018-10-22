import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Player from '../components/Player';


describe('<Player />', () => {
    it('renders <Player /> components', () => {
        shallow(<Player />);
    });
});

chai.use(chaiEnzyme());
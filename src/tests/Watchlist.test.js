import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Watchlist from '../components/Watchlist';


describe('<Watchlist />', () => {
    it('renders <Watchlist /> components', () => {
        shallow(<Watchlist />);
    });
});

chai.use(chaiEnzyme());
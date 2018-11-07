import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import {SearchPage} from '../components/SearchPage';


describe('<SearchPage />', () => {
    it('renders <SearchPage /> components', () => {
        shallow(<SearchPage />);
    });
});

chai.use(chaiEnzyme());
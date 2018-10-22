import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Footer from '../components/Footer';


describe('<Footer />', () => {
    it('renders <Footer /> components', () => {
        shallow(<Footer />);
    });
});

chai.use(chaiEnzyme());
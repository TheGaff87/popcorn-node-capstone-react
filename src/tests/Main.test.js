import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Main from '../components/Main';
import Header from '../components/Header';
import Welcome from "../components/Welcome";
import SearchForm from "../components/SearchForm";
import Chat from "../components/Chat";
import Player from "../components/Player";

describe('<Main />', () => {
    it('renders <Main /> components', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find(Header)).to.have.lengthOf(1);
        expect(wrapper.find(Welcome)).to.have.lengthOf(1);
        expect(wrapper.find(SearchForm)).to.have.lengthOf(1);
        expect(wrapper.find(Chat)).to.have.lengthOf(1);
        expect(wrapper.find(Player)).to.have.lengthOf(1);
    });
});

chai.use(chaiEnzyme());
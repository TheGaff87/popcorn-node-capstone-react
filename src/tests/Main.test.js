import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import {Main} from '../components/Main';
import SearchForm from "../components/SearchForm";
import Chat from "../components/Chat";
import Player from "../components/Player";

describe('<Main />', () => {
    it('renders <Main /> components', () => {
        const videos = [{id: {videoId: 123}, snippet: {title: 'Test'}}];
        const wrapper = shallow(<Main videos={videos}/>);
        expect(wrapper.find(SearchForm)).to.have.lengthOf(1);
        expect(wrapper.find(Player)).to.have.lengthOf(1);
    });

    it('Should render the \'Add to Watchlist\'', () => {
        const videos = [{id: {videoId: 123}, snippet: {title: 'Test'}}];
        const wrapper = shallow(<Main videos={videos}/>);
        const props = wrapper.instance().props.videos[0];
        expect(props).to.have.keys('id', 'snippet');
    });
});

chai.use(chaiEnzyme());
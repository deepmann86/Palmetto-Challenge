import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({adapter: new Adapter()});


describe("Should render App and its child components", () => {
    let component;

    beforeEach(() => {
        component = shallow(<App />);
    });

    it("renders the App", () => {
        expect(component).toHaveLength(1);
    });

});

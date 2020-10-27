import App from './App';
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import {configure, mount, shallow} from 'enzyme';

configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<App/>);
});

it("takes any app title", () => {
    const appTitle = "A random text", wrapper = mount(<App appTitle={appTitle}/>);

    expect(wrapper.props().appTitle).toEqual(appTitle);
});

it("renders any app title", () => {
    const appTitle = "A random text", wrapper = mount(<App appTitle={appTitle}/>);

    expect(wrapper.contains(appTitle)).toEqual(true);
});


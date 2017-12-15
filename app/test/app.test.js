import { shallow } from 'enzyme'
import React from 'react'
import App from '../src/redux/reducer/App'
import { expect } from 'chai'
describe("enzyme", () => {
    it("output 'hello world'", () => {
        let app = shallow(<App />)
        expect(app.find("h1").text()).to.equal("hello world")
    })
})
/**
 * Created by hugo.queiros on 30/05/16.
 */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from './App'
import styles from './styles.module.css'

describe('<App />', function () {
    let wrapper;
    let history = {};
    beforeEach(() => {
        wrapper =
            shallow(<App history={history}/>)
    })

/*    it('has a single wrapper element', () => {
        expect(wrapper.find(`.${styles.wrapper}`))
            .to.have.length(1);
    });*/

    it('has a Router component', () => {
        expect(wrapper.find('Router'))
            .to.have.length(1);
    })

    it('passes a history prop', () => {
        const props = wrapper.find('Router').props();

        expect(props.history)
            .to.be.defined;
    })
});
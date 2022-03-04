import { expect, fixture } from '@open-wc/testing'
import { html } from 'lit'
import {ifDefined} from 'lit/directives/if-defined.js';

import './index'
import DSTypograph from './index'
import { TypographComponent, TypographSize, TypographVariant } from './types'

type BuildElementProps = {
    component?: TypographComponent | undefined, 
    size?: TypographSize | undefined,  
    variant?: TypographVariant | undefined
}

const buildElement = async (props?: BuildElementProps): Promise<DSTypograph> => {
    return await fixture(
        html`
            <ds-typograph
                component=${ifDefined(props?.component)}
                size=${ifDefined(props?.size)}
                variant=${ifDefined(props?.variant)}
            >
                Test
            </ds-typograph>
        `
    ) as DSTypograph
}

describe('<ds-typograph></ds-typograph>', () => {
    it('test default props', async () => {
        const element = await buildElement()
        expect(element.component).to.equal('heading')
        expect(element.size).to.equal('display')
        expect(element.variant).to.equal('h1')
    })
    it('should be render h1 element with display size with default props', async () => {
        const element = await buildElement()
        const heading = element.shadowRoot.querySelector('h1')
        expect(heading.classList.contains('typograph-heading')).to.be.true
        expect(heading.classList.contains('typograph-heading--display')).to.be.true
    })
    it('should be render h1 element with xl size', async () => {
        const element = await buildElement({ size: "xl" })
        const heading = element.shadowRoot.querySelector('h1')
        expect(heading.classList.contains('typograph-heading')).to.be.true
        expect(heading.classList.contains('typograph-heading--xl')).to.be.true
    })
    it('should be render h1 element with lg size', async () => {
        const element = await buildElement({ size: "lg" })
        const heading = element.shadowRoot.querySelector('h1')
        expect(heading.classList.contains('typograph-heading')).to.be.true
        expect(heading.classList.contains('typograph-heading--lg')).to.be.true
    })
    it('should be render h1 element with md size', async () => {
        const element = await buildElement({ size: "md" })
        const heading = element.shadowRoot.querySelector('h1')
        expect(heading.classList.contains('typograph-heading')).to.be.true
        expect(heading.classList.contains('typograph-heading--md')).to.be.true
    })
    it('should be render h1 element with sm size', async () => {
        const element = await buildElement({ size: "sm" })
        const heading = element.shadowRoot.querySelector('h1')
        expect(heading.classList.contains('typograph-heading')).to.be.true
        expect(heading.classList.contains('typograph-heading--sm')).to.be.true
    })
    it('should be render h1 element with xs size', async () => {
        const element = await buildElement({ size: "xs" })
        const heading = element.shadowRoot.querySelector('h1')
        expect(heading.classList.contains('typograph-heading')).to.be.true
        expect(heading.classList.contains('typograph-heading--xs')).to.be.true
    })
    it('should be render h2 element', async () => {
        const element = await buildElement({ variant: "h2" })
        const heading = element.shadowRoot.querySelector('h2')
        expect(heading.classList.contains('typograph-heading')).to.be.true
        expect(heading.classList.contains('typograph-heading--display')).to.be.true
    })
    it('should be render h3 element', async () => {
        const element = await buildElement({ variant: "h3" })
        const heading = element.shadowRoot.querySelector('h3')
        expect(heading.classList.contains('typograph-heading')).to.be.true
        expect(heading.classList.contains('typograph-heading--display')).to.be.true
    })
    it('should be render h4 element', async () => {
        const element = await buildElement({ variant: "h4" })
        const heading = element.shadowRoot.querySelector('h4')
        expect(heading.classList.contains('typograph-heading')).to.be.true
        expect(heading.classList.contains('typograph-heading--display')).to.be.true
    })
    it('should be render h5 element', async () => {
        const element = await buildElement({ variant: "h5" })
        const heading = element.shadowRoot.querySelector('h5')
        expect(heading.classList.contains('typograph-heading')).to.be.true
        expect(heading.classList.contains('typograph-heading--display')).to.be.true
    })
    it('should be render h6 element', async () => {
        const element = await buildElement({ variant: "h6" })
        const heading = element.shadowRoot.querySelector('h6')
        expect(heading.classList.contains('typograph-heading')).to.be.true
        expect(heading.classList.contains('typograph-heading--display')).to.be.true
    })
    it('should be render caption element', async () => {
        const element = await buildElement({ component: "caption" })
        const heading = element.shadowRoot.querySelector('span')
        expect(heading.classList.contains('typograph-caption')).to.be.true
    })
    it('should be render paragraph element', async () => {
        const element = await buildElement({ component: "paragraph" })
        const heading = element.shadowRoot.querySelector('p')
        expect(heading.classList.contains('typograph-paragraph')).to.be.true
    })
})
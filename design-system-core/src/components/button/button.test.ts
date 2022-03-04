import { html } from 'lit';
import { expect, fixture, oneEvent } from '@open-wc/testing';
import { stub } from 'sinon'

import './index';
import { DSButton } from './index';

describe('Testing Button', () => {
  it('Test default props', async() => {
    const element = await fixture(html`<ds-button>Label Test</ds-button>`) as DSButton;
    await expect(element.disabled).to.equal(false);
    await expect(element.loading).to.equal(false);
  })

  it('Test Loading', async () => {
    const element = await fixture(html`<ds-button loading>Label Test</ds-button>`) as DSButton;
    await expect(element.loading).to.equal(true);
    await expect(element.shadowRoot.querySelector('button').classList.contains('button--loading')).to.equal(true)
  })

  it('Test if button click call method', async () => {
    const element = await fixture(html`<ds-button loading>Label Test</ds-button>`) as DSButton;
    const handleClick = stub(element, '_handleClick')

    // Force update and wait update completed
    element.requestUpdate()
    await element.updateComplete

    element.shadowRoot.querySelector('button').click()
    await expect(handleClick).to.have.been.called
  })

  it('Test if button dsClick was called', async () => {
    const element = await fixture(html`<ds-button loading>Label Test</ds-button>`) as DSButton;
    const listenerDsClickEvent = oneEvent(element, 'dsClick');

    // Force update and wait update completed
    element.requestUpdate()
    await element.updateComplete

    element.shadowRoot.querySelector('button').click()
    await expect(await listenerDsClickEvent).to.not.be.empty
  })

})
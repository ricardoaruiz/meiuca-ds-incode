import { LitElement, html, css, unsafeCSS } from 'lit-element'

import styles from './styles.scss'

export default class DSCard extends LitElement {

    static styles = css`
        ${unsafeCSS(styles)}
    `

    _handleClick() {
        this.dispatchEvent(new CustomEvent('dsClick', {
            bubbles: true,
            composed: true
        }))
    }

    render() {
        return html`
            <div part="card" class="card" tabindex="0" @click=${this._handleClick} >
                <slot></slot>
            </div>
        `
    }

}

if (!customElements.get('ds-card')) { customElements.define('ds-card', DSCard); }
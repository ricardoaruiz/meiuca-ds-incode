import { LitElement, html, css, unsafeCSS  } from 'lit-element'

import styles from './styles.scss'

export default class DSTag extends LitElement {

    static styles = css`
        ${unsafeCSS(styles)}
    `

    render() {
        return html`
            <div part="tag" class="tag">
                <slot></slot>
            </div>
        `
    }

}

if (!customElements.get('ds-tag')) { customElements.define('ds-tag', DSTag); }
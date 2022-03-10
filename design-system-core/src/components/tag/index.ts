import { LitElement, html, css, unsafeCSS, customElement  } from 'lit-element'

import styles from './styles.scss'

@customElement('ds-tag')
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
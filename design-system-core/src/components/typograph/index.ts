import { LitElement, html, css, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { TypographComponent, TypographSize, TypographVariant } from './types';
import style from './style.scss'

export default class DSTypograph extends LitElement {

    static styles = css`
        ${unsafeCSS(style)}
    `

    @property({ type: String })
    component: TypographComponent = 'heading'

    @property({ type: String })
    size: TypographSize = 'display'

    @property({ type: String })
    variant: TypographVariant = 'h1'

    private _elements(component: TypographComponent) {
        const components = {
            caption: html`
                <span 
                    part="typograph" 
                    class="typograph typograph-caption"
                >
                    <slot></slot>
                </span>
            `,
            heading: unsafeHTML(`
                <${this.variant} 
                    part="typograph" 
                    class="typograph typograph-heading typograph-heading--${this.size}"
                >
                    <slot></slot>
                </${this.variant}>
            `),
            paragraph: html`
                <p 
                    part="typograph" 
                    class="typograph typograph-paragraph"
                >
                    <slot></slot>
                </p>
            `,
        }

        return components[component]
    }


    render() {
        return this._elements(this.component)
    }
}

if (!customElements.get('ds-typograph')) { customElements.define('ds-typograph', DSTypograph); }
import { html, css, LitElement, unsafeCSS, property } from 'lit-element'
import { classMap } from 'lit/directives/class-map.js'
import { createSvgElement } from '../../utils/svgHelper'

import style from './style.scss'

type IconSize = 'sm' | 'md' | 'lg'

export class DSIcon extends LitElement {

    static styles = css`
        ${unsafeCSS(style)}
    `

    @property({ type: String })
    size: IconSize = 'md'

    @property({ type: String })
    icon = ''

    render() {
        return html`
            <div 
                part="icon"
                class=${
                    classMap({
                        [`icon`]: true,
                        [`icon--${this.size}`]: true
                    }
                )}
            >
                ${createSvgElement(this.icon)}
            </div>
        `
    }

}

if (!customElements.get('ds-icon')) { customElements.define('ds-icon', DSIcon); }
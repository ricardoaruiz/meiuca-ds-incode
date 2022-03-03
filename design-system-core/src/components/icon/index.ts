import { html, css, LitElement, unsafeCSS, property, customElement } from 'lit-element'
import { classMap } from 'lit/directives/class-map.js'
import { createSvgElement } from '../../utils/svgHelper'

import style from './style.scss'

type IconSize = 'sm' | 'md' | 'lg'

@customElement('ds-icon')
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

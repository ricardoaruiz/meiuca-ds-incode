import { html, css, LitElement, unsafeCSS, property } from 'lit-element'
import { classMap } from 'lit/directives/class-map.js'

import { createSvgElement } from '../../utils/svgHelper'
import menu from '@ricardoaruiz/design-assets/dist/assets/icons/menu'
import close from '@ricardoaruiz/design-assets/dist/assets/icons/close'
import Brand from './Brand'
import '../icon'

import style from './style.scss'

export default class DSHeader extends LitElement {

    static styles = css`
        ${unsafeCSS(style)}
    `

    @property({ type: Boolean })
    opened = false

    _handleOpenMenu() {
        this.opened = true
    }

    _handleCloseMenu() {
        this.opened = false
    }

    _renderOpenCloseMenuButton() {
        return html`
            <ds-icon 
                icon=${!this.opened ? menu : close} 
                size="lg"
                @click=${!this.opened ? this._handleOpenMenu : this._handleCloseMenu}
            ></ds-icon>                
        `
    }

    render() {
        return html`
            <header class=${
                classMap({
                    [`header`]: true,
                    [`header--open`]: this.opened
                })
            }>
                <div class="header__container">
                    <div class="header__brand">
                        ${createSvgElement(Brand)}
                    </div>
                    
                    <div class="header__menu-icon">
                        ${this._renderOpenCloseMenuButton()}
                    </div>
   
                    <div class="header__nav">
                        <slot></slot>
                    </div>
                </div>
            </header>
        `
    }
}

if (!customElements.get('ds-header')) { customElements.define('ds-header', DSHeader); }
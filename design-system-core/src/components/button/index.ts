import { LitElement, html, css, unsafeCSS, property } from "lit-element";
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import style from './style.scss'

export class DSButton extends LitElement {

  static styles = css`
    ${unsafeCSS(style)}
  `

  @property({ type: Boolean })
  loading = false

  @property({ type: Boolean })
  disabled = false
    
  _handleClick() {
    this.dispatchEvent(new CustomEvent('dsClick', {
      bubbles: true,
      composed: true
    }))
  }

  render() {
    return html`
      <button 
        class="${
            classMap({
                'button': true,
                'button--loading': this.loading
            })
        }"
        ?disabled=${this.disabled}
        aria-label="${ifDefined(this.loading ? 'Loading' : undefined)}"
        aria-disabled="${this.disabled}"
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `
  }
}

if (!customElements.get('ds-button')) { customElements.define('ds-button', DSButton); }
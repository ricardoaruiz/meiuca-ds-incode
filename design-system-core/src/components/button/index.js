import { LitElement, html, unsafeCSS } from 'lit'

import style from './style.scss'

export class DSButton extends LitElement {

  static get styles() {
      return unsafeCSS(style)
  }

  constructor() {
      super()
  }

  render() {
      return html`
          <button>
              <slot></slot>
          </button>
      `
  }
}

customElements.define('ds-button', DSButton)

